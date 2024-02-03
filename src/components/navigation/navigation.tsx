import Link from "next/link";

import { HeaderConfig } from "@/types/header";
import IconBar from "../icon-bar/icon-bar";

export default function Navigation(config: HeaderConfig) {
  const { brand } = config;

  return (
    <nav className="flex items-center justify-between">
      <div>
        <Link href={brand.url}>{brand.title}</Link>
      </div>
      <IconBar {...config}/>
    </nav>
  )
}
