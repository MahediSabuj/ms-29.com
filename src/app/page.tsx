import ArticleList from "@/components/article-list/article-list";
import {IArticleList} from "@/types/article";

const articles : IArticleList = {
  articleItems: [{
    title: "Form Submission from Publish to Author Instance",
    description: ``,
    url: "/aem/forms/form-submission-from-publish-to-author-instance",
    publishDate: "February 16, 2024",
    modifiedDate: "February 16, 2024",
    topics: [{
      topic: "AEM Forms",
      url: "/aem/forms"
    }]
  }, {
    title: "Create Content Fragment Programmatically",
    description: `Creating a content fragment programmatically requires setting up a system user with Read 
      permission for the content fragment model and Read, Modify, Create permissions for the asset folder where
      the content fragment will be stored. Additionally, ensure the content fragment model and asset folder are
      created for saving the content fragment.`,
    url: "/aem/content-fragment/create-content-fragment-programmatically",
    publishDate: "February 16, 2024",
    modifiedDate: "February 16, 2024",
    topics: [{
      topic: "Content Fragment",
      url: "/aem/content-fragment"
    }]
  }, {
    title: "AEM Component Dialog CheatSheet",
    url: "/aem/sites/component-dialog-cheatsheet",
    publishDate: "February 13, 2024",
    modifiedDate: "February 13, 2024",
    description: `Granite UI provides a large range of the basic components needed to create component 
      dialog on the authoring environment. These components are constructed using Coral UI-based elements.`,
    topics: [{
      topic: "AEM Sites",
      url: "/aem/sites"
    }]
  }, {
    title: "Setting Default Values in AEM Component Dialog",
    url: "/aem/sites/default-value-in-component-dialog",
    publishDate: "February 04, 2024",
    modifiedDate: "February 10, 2024",
    description: `In AEM components, it&apos;s often necessary to establish default values. 
      This ensures that when components are dragged onto the page, they display predefined initial values.
      This functionality is achievable through the utilization of cq:template and cq:templatePath.`,
    topics: [{
      topic: "AEM Sites",
      url: "/aem/sites"
    }]
  }]
}

export default function Home() {
  return (
    <div>
      <ArticleList {...articles}/>
    </div>
  );
}
