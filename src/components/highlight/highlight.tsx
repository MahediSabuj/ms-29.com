import hljs from "highlight.js/lib/core";
import { Highlight } from "@/types/highlight";

export default function Highlight({ code, language, path }: Highlight) {
  const highlighted_code = hljs.highlight(code, {
    language
  }).value;

  return (
    <section className="pt-1">
      <div className="text-white p-2 bg-aem">{path}</div>
      <div className="p-4 bg-neutral-100 overflow-x-auto">
        <code className="language-xml whitespace-pre text-[14px]"
          dangerouslySetInnerHTML={{ __html: highlighted_code }}/>
      </div>
    </section>
  );
}
