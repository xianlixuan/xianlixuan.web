import type { Favicon } from "@/types/config.ts";


export const defaultFavicons: Favicon[] = [
    {
        src: "/favicon/icon-light.svg",
        theme: "light",
        sizes: "any",
    },
    {
        src: "/favicon/icon-dark.svg",
        theme: "dark",
        sizes: "any",
    },
];
