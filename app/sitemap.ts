import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://dawitalemu.dev",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://dawitalemu.dev/docs",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        }
    ];
};
