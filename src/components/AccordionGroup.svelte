<script lang="ts">
  import { writable } from "svelte/store";
  import { onMount, setContext } from "svelte";

  export let allowMultiple = false;

  const activeComponentId = writable(null);

  setContext("multiple", allowMultiple);
  setContext("active", activeComponentId);

  onMount(() => {
    const items = document.querySelectorAll(".accordion-item");
    items.forEach((item, idx) => {
      item.addEventListener("toggle", (e) => {
        console.log(e);
      });
    });
  });
</script>

<div class="accordion-group">
  <slot />
</div>
