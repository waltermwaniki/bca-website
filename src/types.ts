export type Site = {
    website: string;
    author: string;
    desc: string;
    title: string;
    ogImage?: string;
};

export type SocialObjects = {
    name: SocialMedia;
    href: string;
    active: boolean;
    linkTitle: string;
    icon: Icon;
}[];

export type SocialMedia =
    | "Facebook"
    | "Instagram"
    | "LinkedIn"
    | "Mail"
    | "Phone"
    | "Twitter"
    | "YouTube"
    | "WhatsApp";

export type Icon = {
    name: string;
    pack?: string;
}