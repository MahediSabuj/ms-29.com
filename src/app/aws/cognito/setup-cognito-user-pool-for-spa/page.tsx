import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import TOPICS from "@/lib/data/article/topics";
import { SETUP_COGNITO_FOR_SPA as ARTICLE } from "@/lib/data/article/aws/cognito";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const envConfigExample = `# AWS Cognito Configuration
NEXT_PUBLIC_USER_POOL_ID=your-user-pool-id-here
NEXT_PUBLIC_USER_POOL_CLIENT_ID=your-client-id-here`;

const cognitoConfigExample = `// Cognito Configuration
const cognitoConfig = {
  region: 'ap-southeast-1',
  userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
  userPoolWebClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID
};`;

const signUpExample = `// User Registration Example
import { Auth } from 'aws-amplify';

const signUp = async (email, password, firstName, lastName, username) => {
  try {
    const result = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
        'given_name': firstName,
        'family_name': lastName,
        'custom:username': username
      }
    });
    
    return result;
  } catch (error) {
    console.error('Sign up error:', error);
    throw error;
  }
};`;

const breadcrumbs: IBreadCrumb = {
  items: [{
    title: TOPICS.AWS_COGNITO.title,
    url: TOPICS.AWS_COGNITO.url
  }],
  current: ARTICLE.title
}

export default function SetupCognitoUserPool() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}
          views={ARTICLE.views}/>
        <div>
          <section className="pt-6 pb-3">
            Amazon Cognito User Pool delivers authentication, authorization, and user management capabilities for web and mobile applications. 
            This guide demonstrates how to configure a comprehensive Cognito User Pool for a Single Page Application (SPA), covering user 
            registration, sign-in functionality, custom attributes, and email verification processes.
          </section>
        </div>
      </article>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  )
}