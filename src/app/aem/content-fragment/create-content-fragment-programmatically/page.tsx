import { Metadata } from "next";

import Article from "@/components/article/article";
import Highlight from "@/components/highlight/highlight";
import FAQ from "@/components/faq/faq";
import { CONTENT_FRAGMENT_PROGRAMMATICALLY as ARTICLE } from "@/lib/data/article/aem/content-fragment";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const _content_fragment =
`//Get Resource Resolver using System User
ResourceResolver resolver = resolverService.getResourceResolver();

Resource parentRsc = resolver.getResource(assetPath);
Resource cfmResource = resolver.getResource(cfmPath);
FragmentTemplate template = cfmResource.adaptTo(FragmentTemplate.class);

// Create Content Fragment
String name = JcrUtil.createValidName(title);
ContentFragment fragment = template.createFragment(parentRsc, name, title);
        
final Iterator<ContentElement> elementIterator = fragment.getElements();

// Update Content Fragment Element Values          
while (elementIterator.hasNext()) {
  final ContentElement element = elementIterator.next();
  String name = element.getName();
  
  FragmentData fragmentData = element.getValue();
  fragmentData.setValue(properties.get(name));
  element.setValue(fragmentData);
}`;

export default function ContentFragmentProgrammatically() {
   return (
     <div>
       <article itemScope itemType="https://schema.org/Article">
         <Article
           title={ARTICLE.title}
           publishDate={ARTICLE.publishDate}
           modifiedDate={ARTICLE.modifiedDate}/>
         <div>
           <section className="pt-6 pb-2">
             Creating a content fragment programmatically requires setting up a <strong>system user</strong> with
             Read permission for the content fragment model and Read, Modify, Create permissions for the asset folder where
             the content fragment will be stored. Additionally, ensure the content fragment model and asset folder are
             created for saving the content fragment.
           </section>
           <Highlight code={_content_fragment} language="java" path=""/>
         </div>
       </article>
       <FAQ items={[{
         question: "No exceptions but content fragment wasn't created at the specified path.",
         answer: `Ensure to use <code>session.save()</code> to save the changes in the repository.`
       }]}/>
     </div>
   )
}