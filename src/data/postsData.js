// Blog posts shown on Home and /blog (same in every mode).
// Hand-written for now. `npm run posts` regenerates this file from the blog's RSS feed
// (https://rupesh4604.github.io/feed.xml) and will replace these entries, so only run it
// once these posts are live on the blog.
// TODO: swap each url for the post's own address when it is published.
export const posts = [
  {
    title: "A Survey of Geospatial Foundation Models",
    url: "https://rupesh4604.github.io/",
    date: "2025-11-01",
    summary:
      "What geospatial foundation models are, how they are pre-trained on satellite imagery, and where they already beat task-specific models.",
    tags: ["geospatial-ai", "foundation-models"],
  },
  {
    title: "DINOv3 for Remote Sensing: A Review",
    url: "https://rupesh4604.github.io/",
    date: "2025-10-01",
    summary:
      "How Meta's self-supervised DINOv3 features transfer to satellite and aerial imagery, and what still needs a remote-sensing-specific model.",
    tags: ["remote-sensing", "self-supervised"],
  },
  {
    title: "Understanding GeoVLM",
    url: "https://rupesh4604.github.io/",
    date: "2025-09-01",
    summary:
      "A walk through vision-language models for Earth observation: how they connect satellite images to text, and what they can answer.",
    tags: ["vision-language", "geospatial-ai"],
  },
];
