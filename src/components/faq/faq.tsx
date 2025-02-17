import { FAQ } from "@/types/faq";

import styles from "./faq.module.scss";

export default function FrequentlyAskedQuestions({ items } : FAQ ) {
  return (
    <div className={`${styles.faq} pt-6`} itemScope itemType="https://schema.org/FAQPage">
      <h2 className="text-2xl border-b-2 border-[#3A2A1D] mb-3">Frequently Asked Questions (FAQ)</h2>
        {items.map((item, index) => {
          return (
            <div key={index} className="mb-2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">
                <strong dangerouslySetInnerHTML={{ __html: item.question || "" }}></strong>
              </h3>
              <div className="pl-4" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text" dangerouslySetInnerHTML={{ __html: item.answer || "" }}></div>
              </div>
            </div>
          )
        })}
      </div>
  );
}
