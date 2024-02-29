import Image from "next/image";
import hljs from "highlight.js/lib/core";
import { Highlight } from "@/types/highlight";

export default function Highlight({ code, language, path, image }: Highlight) {
  const highlighted_code = hljs.highlight(code, {
    language
  }).value;

  return (
    <section className="pt-1">
      <div className="text-white p-2 bg-aem">{path}</div>
      <div className="border-neutral-300 border-2 border-solid border-t-0">
        <div className="p-4 bg-neutral-100 overflow-x-auto">
          <code className="language-xml whitespace-pre text-[14px]"
            dangerouslySetInnerHTML={{ __html: highlighted_code }}/>
        </div>
        {image &&
          <Image src={image.src}
            alt={image.alt}>
          </Image>
        }
      </div>
    </section>
  );
}
