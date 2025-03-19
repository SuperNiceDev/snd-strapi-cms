import type { Attribute, Schema } from "@strapi/strapi";

export interface BlocksElement extends Schema.Component {
  collectionName: "components_blocks_elements";
  info: {
    description: "";
    displayName: "Element";
  };
  attributes: {};
}

export interface BlocksRow extends Schema.Component {
  collectionName: "components_blocks_rows";
  info: {
    description: "";
    displayName: "Row";
  };
  attributes: {
    link: Attribute.Component<"shared.links", true>;
    richText: Attribute.Component<"shared.rich-text", true>;
    rowId: Attribute.String;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: "components_global_footers";
  info: {
    description: "";
    displayName: "Footer";
  };
  attributes: {
    myText: Attribute.String;
    nav: Attribute.Component<"shared.links", true>;
  };
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: "components_global_navigations";
  info: {
    description: "";
    displayName: "Navigation";
  };
  attributes: {
    items: Attribute.Component<"shared.links", true>;
    myText: Attribute.String;
  };
}

export interface SharedImages extends Schema.Component {
  collectionName: "components_shared_images";
  info: {
    description: "";
    displayName: "Images";
    icon: "dashboard";
  };
  attributes: {
    back: Attribute.Media<"images">;
    front: Attribute.Media<"images">;
    printView: Attribute.Media<"images">;
    thumbnail: Attribute.Media<"images">;
  };
}

export interface SharedLinks extends Schema.Component {
  collectionName: "components_shared_links";
  info: {
    description: "";
    displayName: "Link";
    icon: "backward";
  };
  attributes: {
    href: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    label: Attribute.String & Attribute.Required;
    page: Attribute.Relation<"shared.links", "oneToOne", "api::page.page">;
    target: Attribute.Enumeration<["_blank"]>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: "components_shared_meta_socials";
  info: {
    description: "";
    displayName: "MetaSocial";
    icon: "project-diagram";
  };
  attributes: {
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<"images" | "files" | "videos">;
    socialNetwork: Attribute.Enumeration<["Facebook", "Twitter"]> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: "components_shared_rich_texts";
  info: {
    description: "";
    displayName: "RichText";
    icon: "pencil";
  };
  attributes: {
    size: Attribute.Enumeration<["xs", "s", "m", "l", "xl", "xxl"]>;
    text: Attribute.Text;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: "components_shared_seos";
  info: {
    description: "";
    displayName: "Seo";
    icon: "search";
  };
  attributes: {
    canonicalURL: Attribute.String;
    keywords: Attribute.Text;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Attribute.Media<"images" | "files" | "videos"> &
      Attribute.Required;
    metaRobots: Attribute.String;
    metaSocial: Attribute.Component<"shared.meta-social", true>;
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Attribute.String;
    structuredData: Attribute.JSON;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "blocks.element": BlocksElement;
      "blocks.row": BlocksRow;
      "global.footer": GlobalFooter;
      "global.navigation": GlobalNavigation;
      "shared.images": SharedImages;
      "shared.links": SharedLinks;
      "shared.meta-social": SharedMetaSocial;
      "shared.rich-text": SharedRichText;
      "shared.seo": SharedSeo;
    }
  }
}
