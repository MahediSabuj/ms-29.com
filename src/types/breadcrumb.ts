export interface IBreadCrumb {
  items: IBreadCrumbItem[];
  current: string;
}

interface IBreadCrumbItem {
  title: string;
  url: string;
}