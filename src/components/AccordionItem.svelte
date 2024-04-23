<!-- <script lang="ts">
  import { getContext, onMount } from "svelte";
  import type { Writable } from "svelte/store";

  const allowMultiple: boolean = getContext("multiple");
  const activeComponentId: Writable<any> = getContext("active");

  export let expand: boolean = false;
  export let idx: number;
  const panelId = `accordion-${idx}-panel`;
  const toggleOpen = () => (isOpen = !isOpen);

  let componentId: string;
  let isActive: boolean;
  let isOpen: boolean;

  onMount(() => {
    componentId = `accordion-item-${idx}`;
    isActive = $activeComponentId === componentId;
    isOpen = allowMultiple ? isActive : expand;
  });

  function setActive() {
    $activeComponentId = componentId;
  }

  function handleClick() {
    allowMultiple ? setActive() : toggleOpen();
  }

  $: expand && allowMultiple && setActive();
  $: isActive = $activeComponentId === componentId;
  $: isOpen = allowMultiple ? isActive : expand;
</script> -->
<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  export let open: boolean = false;
  export let idx: number;
  const panelId = `accordion-${idx}-panel`;
  const toggleOpen = () => (open = !open);
  onMount(() => {
    // console.log("AccordionItem mounted");
  });
  const dispatchOpen = createEventDispatcher();
  $: dispatchOpen("toggle", { detail: { idx, open } });
</script>

<div class="accordion-item">
  <button
    class="accordion-toggle"
    aria-controls={panelId}
    aria-expanded={open}
    on:click={toggleOpen}
  >
    <slot name="title" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="accordion-caret"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </button>
  <div class="accordion-panel" id={panelId}>
    <div class="accordion-content">
      <slot name="content" />
    </div>
  </div>
</div>

<style>
  button.accordion-toggle {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: none;
    background-color: transparent;
    color: inherit;
    & > svg.accordion-caret {
      stroke: currentColor;
    }
  }

  .accordion-panel {
    --transition-duration: 0.3s;
    display: grid;
    grid-template-rows: 0fr;
    opacity: 0;
    transition: all var(--transition-duration, 0.3s) ease;
  }

  .accordion-toggle[aria-expanded="true"] + .accordion-panel {
    opacity: 1;
    grid-template-rows: 1fr;
  }

  .accordion-panel > .accordion-content {
    overflow: hidden;
  }
</style>
