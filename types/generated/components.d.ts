import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksElement extends Struct.ComponentSchema {
  collectionName: 'components_blocks_elements';
  info: {
    description: '';
    displayName: 'Element';
  };
  attributes: {};
}

export interface BlocksRow extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rows';
  info: {
    description: '';
    displayName: 'Row';
  };
  attributes: {
    link: Schema.Attribute.Component<'shared.links', true>;
    richText: Schema.Attribute.Component<'shared.rich-text', true>;
    rowId: Schema.Attribute.String;
  };
}

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    myText: Schema.Attribute.String;
    nav: Schema.Attribute.Component<'shared.links', true>;
  };
}

export interface GlobalNavigation extends Struct.ComponentSchema {
  collectionName: 'components_global_navigations';
  info: {
    description: '';
    displayName: 'Navigation';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.links', true>;
    myText: Schema.Attribute.String;
  };
}

export interface SharedImages extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    description: '';
    displayName: 'Images';
    icon: 'dashboard';
  };
  attributes: {
    back: Schema.Attribute.Media<'images'>;
    front: Schema.Attribute.Media<'images'>;
    printView: Schema.Attribute.Media<'images'>;
    thumbnail: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'backward';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    target: Schema.Attribute.Enumeration<['_blank']>;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    description: '';
    displayName: 'MetaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'RichText';
    icon: 'pencil';
  };
  attributes: {
    size: Schema.Attribute.Enumeration<['xs', 's', 'm', 'l', 'xl', 'xxl']>;
    text: Schema.Attribute.Text;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 5;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Schema.Attribute.String;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
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
