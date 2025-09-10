import GooglePublisherTag from "@/components/third-parties/google/gpt";
import Sidebar from "./sidebar";

export default function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
  );
}
