interface IListItem {
  title: string;
  url: string;
  count: number;
}

export interface IListGroup {
  title: string;  
  listItems: IListItem[];
}
