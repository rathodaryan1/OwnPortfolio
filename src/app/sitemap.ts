import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aryanrathod.is-a.dev",
      lastModified: new Date(),
    },
  ];
}