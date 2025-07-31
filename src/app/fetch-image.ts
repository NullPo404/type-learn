"use server";

import { CAT_API_KEY } from "./env";

export async function fetchImage(): Promise<Image> {
    const res = await fetch("https://api.thecatapi.com/v1/images/search", {
        headers: { "X-API-KEY": CAT_API_KEY },
    });
    const images = await res.json();
    console.log("fetched images:", images);
    return images[0];
}

type Image = {
    url: string;
};