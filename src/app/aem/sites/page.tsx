import ArticleList from "@/components/article-list/article-list"

import { IArticleList } from "@/types/article"

const articles : IArticleList = {
  articleItems: [{
    title: "AEM Component Dialog CheatSheet",
    url: "/aem/sites/component-dialog-cheatsheet",
    publishDate: "February 13, 2024",
    modifiedDate: "February 13, 2024",
    description: `Granite UI provides a large range of the basic components needed to create component 
      dialog on the authoring environment. These components are constructed using Coral UI-based elements.`
  }, {
    title: "Setting Default Values in AEM Component Dialog",
    url: "/aem/sites/default-value-in-component-dialog",
    publishDate: "February 04, 2024",
    modifiedDate: "February 10, 2024",
    description: `In AEM components, it&apos;s often necessary to establish default values. 
      This ensures that when components are dragged onto the page, they display predefined initial values.
      This functionality is achievable through the utilization of cq:template and cq:templatePath.`
  }]
}

export default function Sites() {
  return (
    <div>
      <ArticleList {...articles}/>
    </div>
  )  
}
