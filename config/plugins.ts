import { Config as ImageOptimizerConfig } from "strapi-plugin-image-optimizer/dist/server/models/config";

module.exports = ({ env }) => ({
  // https://market.strapi.io/plugins/strapi-plugin-redirects
  redirects: {
    enabled: true,
  },

  // https://market.strapi.io/plugins/strapi-plugin-image-optimizer
  "image-optimizer": {
    include: ["jpeg", "jpg", "png"],
    exclude: ["gif"],
    formats: ["original", "webp", "avif"],
    sizes: [
      {
        name: "xs",
        width: 300,
      },
      {
        name: "sm",
        width: 768,
      },
      {
        name: "md",
        width: 1280,
      },
      {
        name: "lg",
        width: 1920,
      },
      {
        name: "xl",
        width: 2840,
        // Won't create an image larger than the original size
        withoutEnlargement: true,
      },
      {
        // Uses original size but still transforms for formats
        name: "original",
      },
    ],
    additionalResolutions: [1.5, 3],
    quality: 70,
  } satisfies ImageOptimizerConfig,
});
