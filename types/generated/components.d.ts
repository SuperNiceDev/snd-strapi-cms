import type { Schema, Attribute } from "@strapi/strapi";

export interface SharedSeo extends Schema.Component {
  collectionName: "components_shared_seos";
  info: {
    displayName: "Seo";
    icon: "search";
    description: "";
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
    metaImage: Attribute.Media<"images" | "files" | "videos"> &
      Attribute.Required;
    metaSocial: Attribute.Component<"shared.meta-social", true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: "components_shared_rich_texts";
  info: {
    displayName: "RichText";
    icon: "pencil";
    description: "";
  };
  attributes: {
    text: Attribute.Text;
    size: Attribute.Enumeration<["xs", "s", "m", "l", "xl", "xxl"]>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: "components_shared_meta_socials";
  info: {
    displayName: "MetaSocial";
    icon: "project-diagram";
    description: "";
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<["Facebook", "Twitter"]> &
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
    image: Attribute.Media<"images" | "files" | "videos">;
  };
}

export interface SharedLinks extends Schema.Component {
  collectionName: "components_shared_links";
  info: {
    displayName: "Link";
    icon: "backward";
    description: "";
  };
  attributes: {
    href: Attribute.String;
    label: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<["_blank"]>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    page: Attribute.Relation<"shared.links", "oneToOne", "api::page.page">;
  };
}

export interface SharedImages extends Schema.Component {
  collectionName: "components_shared_images";
  info: {
    displayName: "Images";
    icon: "dashboard";
    description: "";
  };
  attributes: {
    front: Attribute.Media<"images">;
    back: Attribute.Media<"images">;
    thumbnail: Attribute.Media<"images">;
    printView: Attribute.Media<"images">;
  };
}

export interface BlocksRow extends Schema.Component {
  collectionName: "components_blocks_rows";
  info: {
    displayName: "Row";
    description: "";
  };
  attributes: {
    rowId: Attribute.String;
    richText: Attribute.Component<"shared.rich-text", true>;
    link: Attribute.Component<"shared.links", true>;
  };
}

export interface BlocksElement extends Schema.Component {
  collectionName: "components_blocks_elements";
  info: {
    displayName: "Element";
    description: "";
  };
  attributes: {};
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: "components_global_navigations";
  info: {
    displayName: "Navigation";
    description: "";
  };
  attributes: {
    items: Attribute.Component<"shared.links", true>;
    myText: Attribute.String;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: "components_global_footers";
  info: {
    displayName: "Footer";
    description: "";
  };
  attributes: {
    myText: Attribute.String;
    nav: Attribute.Component<"shared.links", true>;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "shared.seo": SharedSeo;
      "shared.rich-text": SharedRichText;
      "shared.meta-social": SharedMetaSocial;
      "shared.links": SharedLinks;
      "shared.images": SharedImages;
      "blocks.row": BlocksRow;
      "blocks.element": BlocksElement;
      "global.navigation": GlobalNavigation;
      "global.footer": GlobalFooter;
    }
  }
}
