import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
    website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
    author: "Walter Mwaniki",
    desc: "Supporting the creation of effective student-centered educational institutions.",
    title: "Berotte Consultancy Associates",
    ogImage: "bca-og.jpeg",
};

export const LOCALE = ["en-EN"];

export const CONTACT = {
    email: "cmberotte03@gmail.com",
    phone: "7818016745",
    address: "New York, NY",
};

export const SOCIALS: SocialObjects = [
    {
        name: "LinkedIn",
        text: "Carole M. Berotte Joseph, Ph.D.",
        href: "https://www.linkedin.com/in/carole-m-berotte-joseph-ph-d-33071682/",
        active: true,
        linkTitle: "LinkedIn",
        icon: {
            name: "linkedin"
        },
    },
    {
        name: "Mail",
        text: `${ CONTACT.email }`,
        href: `mailto:${ CONTACT.email }`,
        active: true,
        linkTitle: "email",
        icon: {
            name: "mail",
        },
    },
    {
        name: "Phone",
        text: formatPhoneNumber(CONTACT.phone),
        href: `tel:${ CONTACT.phone }`,
        active: true,
        linkTitle: "phone",
        icon: {
            name: "phone",
        },
    }
];

function formatPhoneNumber(phoneNumber: string): string {
    // Remove all non-digit characters from the phone number
    const digitsOnly = phoneNumber.replace(/\D/g, "");

    // Format the phone number as (XXX) XXX-XXXX
    const areaCode = digitsOnly.slice(0, 3);
    const firstPart = digitsOnly.slice(3, 6);
    const secondPart = digitsOnly.slice(6, 10);
    return `(${ areaCode }) ${ firstPart }-${ secondPart }`;
}