import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { SALESFORCE_HEADLESS_AUTHENTICATION as ARTICLE } from "@/lib/data/article/salesforce/identity";

import HEADLESS_ALLOW_CODE_CREDENTIALS from './assets/Headless_Allow_Code_Credentials.webp';
import MANAGE_HEADLESS_IDENTITY_FEATURES from './assets/Manage_Headless_Identity_Features.webp';
import ASSIGN_HEADLESS_ADMIN_ROLE_TO_SYSTEM_ADMIN from './assets/Assign_Headless_Admin_Role_to_System_Admin.webp';
import SETUP_PROFILE_FOR_END_USERS from './assets/Setup_Profile_for_End_Users.webp';
import CREATE_ACCOUNT_FOR_END_USERS from './assets/Create_Account_for_End_Users.webp';
import SALESFORCE_MY_DOMAIN_SETUP from './assets/Salesforce_My_Domain_Setup.webp'
import ENABLE_DIGITAL_EXPERIENCE from './assets/Enable_Digital_Experience.webp';
import NEW_EXPERIENCE_CLOUD_SITE from './assets/New_Experience_Cloud_Site.webp';
import SETUP_PROFILE_FOR_EXPERIENCE_CLOUD_SITE from './assets/Setup_Profile_Experience_Cloud_Site.webp';
import CONNECTED_APP_SETUP from './assets/Connected_App_Setup.webp';
import CONNECTED_APP_AUTH_POLICIES from './assets/Connected_App_Auth_Policies.webp';
import CONNECTED_APP_MANAGE_PROFILES from './assets/Connected_App_Manage_Profiles.webp';
import EXPERIENCE_CLOUD_SITE_REGISTER_USER_CONFIGURATION from './assets/Experience_Site_Register_User_Configuration.webp';
import REGISTER_NEW_HEADLESS_USER from './assets/Register_New_Headless_User.webp';
import HEADLESS_LOGIN_AUTHENCATION_REQUEST from './assets/Headless_Login_Authentication_Request.webp';
import HEADLESS_LOGIN_ACCESS_TOKEN_REQUEST from './assets/Headless_Login_Access_Token_Request.webp';
import HEADLESS_LOGIN_USERPROFILE_INFO from './assets/Headless_Login_UserProfile_Info.webp';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "Salesforce Identity",
    url: "/salesforce/identity"
  }],
  current: ARTICLE.title
}

export default function HeadlessAuthentication() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <div>
          <section className="pt-6">
            With headless authentication, backend authentication can be segregated from frontend identity experiences, 
            enhancing faster login experience. It enables each channel to provide unique UI experiences according to their brand guidelines.
          </section>
          <h2 className="text-xl mt-4">
            <strong>Enable Authorization Code and Credentials Flow</strong>
          </h2>
          <section className="pt-1">
            The Authorization Code and Credentials Flow is the foundation of headless login. Enable this flow at an org-wide level.
            From <strong>Setup</strong>, select <strong>OAuth and OpenID Connect Settings</strong> and turn on <strong>Allow Authorization
            Code and Credentials Flows.</strong>
          </section>
          <Image src={HEADLESS_ALLOW_CODE_CREDENTIALS} className="border mt-2"
            alt="Allow Headless Code Credentilas">
          </Image>
          <h2 className="text-xl mt-4">
            <strong>Create a Role to Manage Headless Identity Features</strong>
          </h2>
          <section className="pt-1">
            For identity and access management, it&apos;s important to define who can access what. Create a role to ensure that you 
            have the right level of access to manage Headless Identity features. From <strong>Roles</strong>, click on <strong>Set Up 
            Roles</strong> and select <strong>Add Role</strong> under the CEO.
          </section>
          <Image src={MANAGE_HEADLESS_IDENTITY_FEATURES} className="border mt-2"
            alt="Manage Headless Identity Features">
          </Image>
          <section className="pt-2">
            Assign the role that you created to your System Administrator user. From <strong>Users</strong>, edit the System Administrator
            user and assign the newly created Role from the <strong>Role</strong> dropdown.
          </section>
          <Image src={ASSIGN_HEADLESS_ADMIN_ROLE_TO_SYSTEM_ADMIN} className="border mt-2"
            alt="Assign Headless Admin Role to System Admin">
          </Image>
          <h2 className="text-xl mt-4">
            <strong>Set Up Profile for End Users</strong>
          </h2>
          <section className="pt-1">
            For Headless Identity, you use profiles to define how your end users access data in Salesforce. New users are automatically assigned 
            to this profile when they register. Instead of creating a new profile, you can clone an existing standard profile to get all of its 
            preconfigured permissions and access settings. You can then customize the profile as needed. From <strong>Profiles</strong>, clone <strong>Customer 
            Community User</strong>.
          </section>
          <Image src={SETUP_PROFILE_FOR_END_USERS} className="border mt-2"
            alt="Set Up Profile for End Users">
          </Image>
          <section className="pt-2">
            You must use an account to store information about your end users, including their contact records. Salesforce supports two types of
            accounts: business accounts, which store information about organizations, and person accounts, which store information about individuals.
            For this example, you use a business account to keep all your end-user records in one place. From <strong>Sales</strong> app, select <strong>
            Accounts</strong> Tab and click <strong>New</strong> to create a new account.
          </section>
          <Image src={CREATE_ACCOUNT_FOR_END_USERS} className="border mt-2"
            alt="Create Account for End Users">
          </Image>
          <h2 className="text-xl mt-4">
            <strong>Set Up and Configure Experience Cloud Site</strong>
          </h2>
          <Image src={SALESFORCE_MY_DOMAIN_SETUP} className="border mt-2"
            alt="Salesforce My Domain Setup">
          </Image>
          <Image src={ENABLE_DIGITAL_EXPERIENCE} className="border mt-2"
            alt="Enable Digital Experience">
          </Image>
          <Image src={NEW_EXPERIENCE_CLOUD_SITE} className="border mt-2"
            alt="Create Experience Cloud Site">
          </Image>
          <Image src={SETUP_PROFILE_FOR_EXPERIENCE_CLOUD_SITE} className="border mt-2"
            alt="Setup Profile for Experience Cloud Site">
          </Image>
          <h2 className="text-xl mt-4">
            <strong>Set Up Connected App for Headless Identity</strong>
          </h2>
          <section className="pt-1">
            To establish a connecttion between an external application and Salesforce, it&apos;s essential to setup a Connected App.
            During configuring the Connected App for headless authentication, ensure to activate the Authorization Code and Credentials 
            Flow at the app level. To begin, navigate to <strong>App Manager</strong> and select <strong>New Connected App</strong>.
          </section>
          <Image src={CONNECTED_APP_SETUP} className="border mt-2"
            alt="Connected App for Headless Setup">
          </Image>
          <section className="pt-4">
            In a standard OAuth flow, users often see an approval screen where they confirm that an app is allowed to access their Salesforce 
            data. With headless identity flows, you don&apos;t want to show users a Salesforce approval screen. To preapprove access, configure 
            OAuth policies on your connected app. From <strong>Edit Policies</strong>, under <strong>OAuth Policies</strong>, set the Permitted 
            Users policy to <strong>Admin approved users are pre-authorized</strong>.
          </section>
          <Image src={CONNECTED_APP_AUTH_POLICIES} className="border mt-2"
            alt="Connected App Auth Policies">
          </Image>
          <Image src={CONNECTED_APP_MANAGE_PROFILES} className="border mt-2"
            alt="Connected App Manage Profiles">
          </Image>
          <h2 className="text-xl mt-4">
            <strong>Create a User to Verify Headless Identity Setup</strong>
          </h2>
          <Image src={EXPERIENCE_CLOUD_SITE_REGISTER_USER_CONFIGURATION} className="border mt-2"
            alt="Experience Cloud Site Register User Configuration">
          </Image>
          <Image src={REGISTER_NEW_HEADLESS_USER} className="border mt-2"
            alt="Register new Headless User">
          </Image>
          <h2 className="text-xl mt-4">
            <strong>Headless Login Postman Request</strong>
          </h2>
          <Image src={HEADLESS_LOGIN_AUTHENCATION_REQUEST} className="border mt-2"
            alt="Headless Login Authentication Request">
          </Image>
          <Image src={HEADLESS_LOGIN_ACCESS_TOKEN_REQUEST} className="border mt-2"
            alt="Headless Login Access Token Request">
          </Image>
          <Image src={HEADLESS_LOGIN_USERPROFILE_INFO} className="border mt-2"
            alt="Headless Login UserProfile Info">
          </Image>
        </div>
      </article>
    </div>
  );
}
