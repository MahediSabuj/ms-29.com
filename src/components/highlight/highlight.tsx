import Image from "next/image";
import hljs from "highlight.js/lib/core";
import { Highlight } from "@/types/highlight";

export default function HighlightCode({ code, language, path, image }: Highlight) {
  const highlighted_code = hljs.highlight(code, {
    language
  }).value;

  return (
    <section className="pt-1">
      <div className="text-white px-2 py-1 bg-aem">{path}</div>
      <div className="border-neutral-300 border-2 border-solid border-t-0">
        <div className="p-2 bg-neutral-100 overflow-x-auto">
          <code className="whitespace-pre text-[14px]"
            dangerouslySetInnerHTML={{ __html: highlighted_code }}/>
        </div>
        {image &&
          <Image src={image.src} width="450"
            alt={image.alt}>
          </Image>
        }
      </div>
    </section>
  );
}
