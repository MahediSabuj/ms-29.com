import { ITopic } from "@/types/article";

interface IListItem {
  topic: ITopic;
  count: number;
}

export interface IListGroup {
  title: string;  
  listItems: IListItem[];
}
