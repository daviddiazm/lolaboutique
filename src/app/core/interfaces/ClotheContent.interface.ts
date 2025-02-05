export interface ClotheContent {
  sys:      ClotheContentSys;
  total:    number;
  skip:     number;
  limit:    number;
  items:    Item[];
  includes: Includes;
}

export interface Includes {
  Asset: Asset[];
}

export interface Asset {
  metadata: Metadata;
  sys:      AssetSys;
  fields:   AssetFields;
}

export interface AssetFields {
  title:       string;
  description: string;
  file:        File;
}

export interface File {
  url:         string;
  details:     Details;
  fileName:    string;
  contentType: string;
}

export interface Details {
  size:  number;
  image: Image;
}

export interface Image {
  width:  number;
  height: number;
}

export interface Metadata {
  tags:     any[];
  concepts: any[];
}

export interface AssetSys {
  space:            ContentType;
  id:               string;
  type:             string;
  createdAt:        Date;
  updatedAt:        Date;
  environment:      ContentType;
  publishedVersion: number;
  revision:         number;
  locale:           string;
  contentType?:     ContentType;
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  id:       ID;
  type:     Type;
  linkType: LinkType;
}

export enum ID {
  ClothePost = "clothePost",
  Master = "master",
  Ns1X73Tsl4T9 = "ns1x73tsl4t9",
}

export enum LinkType {
  ContentType = "ContentType",
  Environment = "Environment",
  Space = "Space",
}

export enum Type {
  Link = "Link",
}

export interface Item {
  metadata: Metadata;
  sys:      AssetSys;
  fields:   ItemFields;
}

export interface ItemFields {
  idClothe:         string;
  titleClothe:      string;
  imgClothe:        Asset[];
  brandClothe:      string;
  sizeClothe:       string;
  priceClothe:      number;
  typeClothe:       string;
  conditionClothe:  number;
  availableClothe?: boolean;
}

export interface ClotheContentSys {
  type: string;
}
