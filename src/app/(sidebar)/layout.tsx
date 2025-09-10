import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { GoogleTagManager } from '@next/third-parties/google';
import hljs from 'highlight.js/lib/core';

import apache from 'highlight.js/lib/languages/apache';
import bash from 'highlight.js/lib/languages/bash';
import shell from 'highlight.js/lib/languages/shell';
import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import makefile from 'highlight.js/lib/languages/makefile';
import nginx from 'highlight.js/lib/languages/nginx';
import python from 'highlight.js/lib/languages/python';
import sql from 'highlight.js/lib/languages/sql';
import terraform from '@/lib/highlightjs/terraform';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';
import ini from 'highlight.js/lib/languages/ini';

import "../globals.scss";
import 'highlight.js/styles/default.css';

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import GooglePublisherTag from "@/components/third-parties/google/gpt";
import { HeaderConfig } from "@/types/header";
import Sidebar from "./sidebar";

hljs.registerLanguage('apache', apache);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('ini', ini);
hljs.registerLanguage('java', java);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('makefile', makefile);
hljs.registerLanguage('nginx', nginx);
hljs.registerLanguage('python', python);
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('terraform', terraform);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('yaml', yaml);

const adobeCleanFont = localFont({
  src: "../AdobeClean-Regular.otf"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ms-29.com"),
  title: "MS-29",
  openGraph: {
    type: "website",
    siteName: "MS-29"
  },
  verification: {
    other: {
      "google-adsense-account": "ca-pub-1227403014540775"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
      </head>
      <body className={adobeCleanFont.className}>
        <div className="flex flex-col min-h-screen">
          <Header/>
          <div className="container mx-auto py-8 grow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:flex gap-8">
              <main className="md:w-3/4 w-full">
                <GooglePublisherTag
                  container="div-gpt-ad-1738911994343-0"
                  adUnit="ms29-banner"
                  sizes={[[728, 90], [320, 50], [970, 90]]}
                  sizeMapping={[
                    [[768, 0], [[728, 90]]],
                    [[0, 0], [[320, 50]]]
                  ]}/>
                <div>{children}</div>
              </main>
              <aside className="md:w-1/4 w-full md:pt-0 pt-8">
                <Sidebar/>
              </aside>
            </div>
          </div>
          <Footer/>
          <GoogleTagManager gtmId={process.env.GTM_ID || ""}/>
        </div>
      </body>
    </html>
  );
}
