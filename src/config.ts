import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
    website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
    author: "Walter Mwaniki",
    desc: "Supporting the creation of effective student-centered educational institutions.",
    title: "Berotte Consultancy Associates",
    ogImage: "bca-og.jpeg",
};

export const LOCALE = ["en-EN"];

export const SOCIALS: SocialObjects = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/carole-m-berotte-joseph-ph-d-33071682/",
        active: true,
        linkTitle: "LinkedIn",
        icon: {
            name: "linkedin"
        },
    },
    {
        name: "Mail",
        href: "mailto:walter.g.mwaniki@gmail.com",
        active: true,
        linkTitle: "email",
        icon: {
            name: "mail",
        },
    },
    {
        name: "Phone",
        href: "mailto:8454530183",
        active: true,
        linkTitle: "phone",
        icon: {
            name: "phone",
        },
    }
];