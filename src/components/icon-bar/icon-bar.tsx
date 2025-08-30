import Link from "next/link";

import { HeaderConfig } from "@/types/header";
import IconItem from "@/components/icon-item/icon-item";

export default function IconBar({ socialProfiles } : HeaderConfig) {

  return (
    <div className="flex">
      {socialProfiles.map((item, index) => {
        return (
          <IconItem key={index} {...item} />
        );
      })}
    </div>
  );
}
