export interface PageResult<T> {
  totalCount: number;
  items: T[];
}

export interface IPaginationOptions {
  skipCount: number;
  maxResultCount: number;
  keyword?: string;
}

export interface Result<T> {
  result: T;
  targetUrl: string;
  success: boolean;
  urror: string;
  unAuthorizedRequest: boolean;
}

export interface SiteSettings {
  id: number;
  pageIdentifier: "app/home" | "";
  pageName: string;
  pageSetting: "";
}

export interface CommonHomeCard {
  FilePath: string;
  File?: string;
  background?: string;
  Header: string;
  SubHeader: string;
  Description: string;
}

export interface Checklist {
  Checklist1: string;
  Checklist2: string;
  Checklist3: string;
  Checklist4: string;
}

export interface Testimonial {
  Comment: string;
  Author: string;
}

export interface HomeSettings {
  MainCarousels: CommonHomeCard[];

  FirstBlog: CommonHomeCard;
  SecondBlog: CommonHomeCard;
  ThirdBlog: CommonHomeCard;
  ForthBlog: CommonHomeCard;

  VideoSection: CommonHomeCard;

  KnowAboutHeader: string;
  ChecklistMainHeader: string;
  Checklist: Checklist;

  Slogan: string;
  SloganImage: string;
  SloganFile?: FileList;
  SloganChecklist: string;

  Testimonials: Testimonial[];
}
