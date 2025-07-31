"use client";

import { useState } from "react";
import { fetchImage } from "./fetch-image";
import styles from "./page.module.css";

type CatImageProps = {
    url: string;
};

export function CatImage({ url }: CatImageProps) {
    const [ImageUrl, setImageUrl] = useState(url);

    const refreshImage = async () => {
        setImageUrl("");
        const newImage = await fetchImage();
        setImageUrl(newImage.url);
    };

    return (
        <div className={styles.page}>
            <button onClick={refreshImage} className={styles.button}>
                他の猫も見る👀
            </button>
            <div className={styles.frame}>
                {ImageUrl && <img src={ImageUrl} className={styles.img} />}
            </div>
        </div>
    )
}