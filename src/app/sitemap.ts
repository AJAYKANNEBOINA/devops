import { MetadataRoute } from "next";
import { mockDrives } from "@/lib/mock-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const driveUrls = mockDrives.map((drive) => ({
    url: `https://walkindrives.in/drives/${drive.id}`,
    lastModified: new Date(drive.date),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://walkindrives.in",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://walkindrives.in/drives",
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.9,
    },
    ...driveUrls,
  ];
}
