import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksElement extends Schema.Component {
  collectionName: 'components_blocks_elements';
  info: {
    displayName: 'Element';
    description: '';
  };
  attributes: {
    elementId: Attribute.String;
  };
}

export interface BlocksRow extends Schema.Component {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'Row';
    description: '';
  };
  attributes: {
    rowId: Attribute.String;
    element: Attribute.Component<'blocks.element', true>;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'footer';
    description: '';
  };
  attributes: {
    footerText: Attribute.String;
  };
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: 'components_global_navigations';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    navText: Attribute.String;
  };
}

export interface SharedImages extends Schema.Component {
  collectionName: 'components_shared_images';
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

export interface SharedLinks extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    icon: 'backward';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank']>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'RichText';
    icon: 'pencil';
  };
  attributes: {
    text: Attribute.Blocks;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media & Attribute.Required;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.element': BlocksElement;
      'blocks.row': BlocksRow;
      'global.footer': GlobalFooter;
      'global.navigation': GlobalNavigation;
      'shared.images': SharedImages;
      'shared.links': SharedLinks;
      'shared.meta-social': SharedMetaSocial;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
    }
  }
}
