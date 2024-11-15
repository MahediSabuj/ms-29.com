import React from "react";
import { PAGE_TYPE } from "@/types/enum/page-type";

export interface ITopic {
  title: string;
  url: string;
}

export interface IArticleItem {
  title: string;
  description?: string;
  topics?: ITopic[];
  url?: string;
  publishDate: string;
  modifiedDate: string;
  views?: number;
  active?: boolean;
}

export interface Topics {
  [key: string]: ITopic
}

export interface IArticleList {
  articleItems: IArticleItem[];
  pageType?: PAGE_TYPE
}

export interface IArticleReview {
  items: IArticleReviewItem[]
}

export interface IArticleReviewItem {
  fullName: string;
  reviewDate: string;
  message: string;
  replies?: IArticleReviewItem[]
}

export interface IHeading {
  heading: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode
}

export default PAGE_TYPE;
