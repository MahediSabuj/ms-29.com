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
  title: string;
}

export interface HeaderConfig {
  brand: Brand;
  navigationItems: NavigationItem[];
  socialProfiles: IconItem[]
}
