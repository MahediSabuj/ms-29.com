import { ReactNode, SVGProps } from "react";

interface Brand {
  title: string;
  url: string;
}

interface NavigationItem {

}

export interface IconItem {
  name: string;  
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface HeaderConfig {
  brand: Brand;
  navigationItems: NavigationItem[];
  socialProfiles: IconItem[]
}
