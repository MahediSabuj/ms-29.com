"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { AdSlot } from "@/types/google";

export const AD_SLOT_ID = "22343941244";

export default function GooglePublisherTag({ adUnit, sizes, container }: AdSlot) {
  const adRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<any>(null);
  const isInitialRender = useRef(true);
  const pathname = usePathname();

  const fullAdUnit = `/${AD_SLOT_ID}/${adUnit}`;

  useEffect(() => {
    const initAd = () => {
      if (typeof window === "undefined" || !adRef.current) return;

      const googletag = window.googletag || ({} as any);
      googletag.cmd = googletag.cmd || [];

      googletag.cmd.push(() => {
        if (!slotRef.current) {
          slotRef.current = googletag.defineSlot(fullAdUnit, sizes, adRef.current!.id).addService(googletag.pubads());
          googletag.pubads().enableSingleRequest();
          googletag.pubads().collapseEmptyDivs();
          googletag.enableServices();
        }
        googletag.display(adRef.current!.id);
      });
    }

    initAd();

  }, [fullAdUnit, sizes]); // Run only on mount and when adUnitPath or size changes

  useEffect(() => {
    // Skip the initial render
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    // Refresh the ad when pathname changes
    const timeout = setTimeout(() => {
      if (typeof window !== "undefined" && slotRef.current) {
        const googletag = window.googletag;
        googletag.cmd.push(() => {
          googletag.pubads().refresh([slotRef.current]);
        });
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, [pathname]); // Run when pathname changes

    return <div ref={adRef} id={container} className="mb-6 flex justify-center" />
}
