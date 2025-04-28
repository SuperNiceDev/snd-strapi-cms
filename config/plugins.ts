export default () => ({
  'webp-converter': {
    // enabled: true,
    enabled: false,
    config: {
      // mimeTypes that converts to WebP. Default is ['image/png', 'image/jpeg', 'image/jpg']
      mimeTypes: undefined,
      options: {
        // WebP options: https://sharp.pixelplumbing.com/api-output#webp
      },
    },
  },
});