import Link from "next/link";

import { IListGroup } from "@/types/list";
import ListGroup from "@/components/list-group/list-group";

const aem : IListGroup = {
  title: "Adobe Experience Manager",
  listItems: [{
    title: "AEM Sites",
    url: "/aem/sites",
    count: 2
  }]
}

export default function Sidebar() {
  return (
    <div>
      <section>
        <div className="block border-b">
          About Me
        </div>
        <div>
          <Link href="/profile/mahedi-sabuj" className="text-blue-600">
            Abdullah &ndash; Al &ndash; Mahedi <strong>Sabuj</strong><br/>
          </Link>  
          Principal Engineer @ <Link href="https://brainstation-23.com" >Brain Station 23 Ltd</Link>
        </div>
      </section>
      <section className="mt-4">
        <ListGroup {...aem}/>
      </section>
    </div>
  ); 
}
