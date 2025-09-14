import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import HighlightCode from "@/components/highlight/highlight";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import TOPICS from "@/lib/data/article/topics";

import { SETUP_COGNITO_FOR_SPA as ARTICLE } from "@/lib/data/article/aws/cognito";

import AWS_COGNITO_CREATE_USER_POOL from "./assets/aws-cognito-setup.png";
import AWS_COGNITO_SIGNUP_ADDITIONAL_ATTRIBUTES from "./assets/aws-cognito-signup-additional-attributes.png";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const AMPLIFY_CONFIG =
`import { Amplify } from 'aws-amplify';

const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolId: 'ap-southeast-1_XXXXXXXXX', // Your User Pool ID
      userPoolClientId: 'xxxxxxxxxxxxxxxxxxxx', // Your App Client ID
      signUpVerificationMethod: 'code'
    }
  }
};

Amplify.configure(amplifyConfig);`

const SIGN_UP = 
`import { signUp } from 'aws-amplify/auth';

await signUp({
  username: email,
  password: password,
  options: {
    userAttributes: {
      email: email,
      given_name: first_name,
      family_name: last_name,
      'custom:username': username
    }
  }
});`;

const EMAIL_VERIFICATION = 
`import { confirmSignUp } from 'aws-amplify/auth';

await confirmSignUp({
  username: email,
  confirmationCode: code
});`;

const LOGIN =
`import { signIn } from 'aws-amplify/auth';

await signIn({
  username: email,
  password: password
});`;

const CURRENT_USER = 
`import { getCurrentUser } from 'aws-amplify/auth';

const user = await getCurrentUser();`;

const SIGN_OUT = 
`import { signOut } from 'aws-amplify/auth';

await signOut();`;

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
          <section className="pt-6">
            Amazon Cognito User Pool delivers authentication, authorization, and user management capabilities for web and mobile applications. 
            This guide demonstrates how to configure a comprehensive Cognito User Pool for a Single Page Application (SPA), covering user 
            registration, sign-in functionality, custom attributes, and email verification processes.
          </section>
          
          <h2 className="text-xl mt-6">
            <strong>Create User Pool</strong>
          </h2>
          <section className="pt-4">
            To create a new Cognito User Pool for your SPA, follow these steps:
            <ul className="list-disc ml-6 pt-2 pl-2.5">
              <li>Navigate to <Link className="text-blue-600" target="_blank" href="https://console.aws.amazon.com/cognito">Amazon Cognito</Link> console.</li>
              <li>Click <strong>Create User Pool</strong> to start the setup process.</li>
              <li>Choose your <strong>Application Type</strong> and <strong>Sign-in Identifiers</strong> based on your application requirements.</li>
              <li>Select <strong>Required attributes</strong> such as email, given_name, family_name.</li>
            </ul>
            <Image src={AWS_COGNITO_CREATE_USER_POOL} className="border border-gray-200 mt-4"
             alt="Create AWS Cognito User Pool for SPA">
            </Image>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Configure the Sign-Up Experience</strong>
          </h2>
          <section className="pt-4">
            To customize the sign-up experience, you can add custom attributes to capture additional user information:
            <ul className="list-disc ml-6 pt-2 pl-2.5">
              <li>Under <strong>Custom attributes</strong>, click <strong>Add custom attribute</strong> if you need additional user data.</li>
              <li>For example, add a <strong>username</strong> custom attribute:
                <ul className="list-disc ml-6 pt-1">
                  <li>Attribute name: <span className="code-inline background">username</span></li>
                  <li>Data type: String</li>
                  <li>Set <strong>Mutable</strong> to allow users to update this attribute after account creation.</li>
                </ul>
              </li>
              <li>Configure other custom attributes as needed for your business requirements.</li>
            </ul>
            <Image src={AWS_COGNITO_SIGNUP_ADDITIONAL_ATTRIBUTES} className="border border-gray-200 mt-4"
             alt="Configure Custom Attributes for User Pool Sign Up">
            </Image>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Retrieve Configuration Values</strong>
          </h2>
          <section className="pt-4">
            After the User Pool is created, collect the following essential configuration values:
            
            <div className="mt-4 p-4 bg-slate-50 rounded-lg border">
              <ul className="space-y-2">
                <li><strong>User Pool ID</strong>
                  <ul className="ml-4 mt-1 text-sm text-slate-600">
                    <li>Found in the User Pool Overview page</li>
                    <li>Format: <span className="code-inline background">ap-southeast-1_XXXXXXXXX</span></li>
                  </ul>
                </li>
                <li><strong>App Client ID</strong>
                  <ul className="ml-4 mt-1 text-sm text-slate-600">
                    <li>Found in Applications → App Clients section</li>
                    <li>Format: <span className="code-inline background">xxxxxxxxxxxxxxxxxxxx</span></li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>

          <section className="pt-4">
            This covers the fundamental setup for a Cognito User Pool tailored for Single Page Applications. With this basic configuration, you can:
            <ul className="list-disc ml-6 pt-2 pl-2.5">
              <li>Enable user registration and sign-in functionality</li>
              <li>Manage user attributes and profiles</li>
              <li>Handle email verification workflows</li>
              <li>Secure your SPA with JWT tokens</li>
            </ul>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Frontend Integration with AWS Amplify</strong>
          </h2>
          <section className="pt-4">
            AWS Amplify simplifies Cognito integration by providing clean, easy-to-use methods for authentication. 
            
            <h3 className="font-semibold mt-4 mb-2">Installation</h3>
            <HighlightCode code="npm install aws-amplify" language="bash" path=""/>
            
            <h3 className="font-semibold mt-4 mb-2">Configuration</h3>
            <HighlightCode code={AMPLIFY_CONFIG} language="javascript" path="lib / amplify-config.ts"/>
            
            <h3 className="font-semibold mt-4 mb-2">Authentication Methods</h3>
            <div className="overflow-x-auto mt-2">
              <table className="w-full border-collapse md:border border-slate-300 auth-methods-table">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-300 px-4 py-2 text-left font-semibold">Method</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-semibold">Sample Code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-medium">User Registration</td>
                    <td className="border border-slate-300 px-4 py-2">
                      <HighlightCode code={SIGN_UP} language="javascript" path=""/>
                    </td>
                  </tr>
                  <tr className="bg-slate-25">
                    <td className="border border-slate-300 px-4 py-2 font-medium">Email Verification</td>
                    <td className="border border-slate-300 px-4 py-2">
                      <HighlightCode code={EMAIL_VERIFICATION} language="javascript" path=""/>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-medium">User Login</td>
                    <td className="border border-slate-300 px-4 py-2">
                      <HighlightCode code={LOGIN} language="javascript" path=""/>
                    </td>
                  </tr>
                  <tr className="bg-slate-25">
                    <td className="border border-slate-300 px-4 py-2 font-medium">Get Current User</td>
                    <td className="border border-slate-300 px-4 py-2">
                      <HighlightCode code={CURRENT_USER} language="javascript" path=""/>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-medium">User Logout</td>
                    <td className="border border-slate-300 px-4 py-2">
                      <HighlightCode code={SIGN_OUT} language="javascript" path=""/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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