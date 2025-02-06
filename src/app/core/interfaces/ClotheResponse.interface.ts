export interface ClotheResponse {
  metadata: Metadata;
  sys:      ImgClotheSys;
  fields:   ClotheResponseFields;
}

export interface ClotheResponseFields {
  idClothe:        string;
  titleClothe:     string;
  imgClothe:       ImgClothe[];
  brandClothe:     string;
  sizeClothe:      string;
  priceClothe:     number;
  typeClothe:      string;
  conditionClothe: number;
}

export interface ImgClothe {
  metadata: Metadata;
  sys:      ImgClotheSys;
  fields:   ImgClotheFields;
}

export interface ImgClotheFields {
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

export interface ImgClotheSys {
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
  id:       string;
  type:     string;
  linkType: string;
}
