import { Config as ImageOptimizerConfig } from "strapi-plugin-image-optimizer/dist/server/models/config";

export default ({ env }) => {
  // console.log("plugins.js env: ", env);

  const plugins = {
    // https://market.strapi.io/plugins/strapi-plugin-redirects
    redirects: {
      enabled: true,
    },

    // https://market.strapi.io/plugins/strapi-plugin-image-optimizer
    "image-optimizer": {
      enabled: true,
      config: {
        include: ["jpeg", "jpg", "png"],
        exclude: ["gif"],
        // formats: ["original", "webp", "avif"],
        formats: ["webp"],
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
        // additionalResolutions: [1.5, 3],
        quality: 90,
      } satisfies ImageOptimizerConfig,
    },
  };

  // console.log("plugins.js plugins: ", plugins);
  return plugins;
};
