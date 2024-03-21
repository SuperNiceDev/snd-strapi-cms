import type { Schema, Attribute } from '@strapi/strapi';

export interface ImagesImages extends Schema.Component {
  collectionName: 'components_images_images';
  info: {
    displayName: 'Images';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    front: Attribute.Media;
    back: Attribute.Media;
    thumbnail: Attribute.Media;
    printView: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'images.images': ImagesImages;
    }
  }
}
