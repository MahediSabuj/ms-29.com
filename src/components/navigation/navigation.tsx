import Link from "next/link";

import { HeaderConfig } from "@/types/header";
import IconBar from "../icon-bar/icon-bar";

export default function Navigation(config: HeaderConfig) {
  const { brand } = config;

  return (
    <nav>
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link href={brand.url}>{brand.title}</Link>
          <IconBar {...config}/>
        </div>
      </div>
    </nav>
  )
}
