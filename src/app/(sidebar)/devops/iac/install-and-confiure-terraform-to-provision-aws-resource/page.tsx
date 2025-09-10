import { Metadata } from "next";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import HighlightCode from "@/components/highlight/highlight";

import {
  INSTALL_AND_CONFIGURE_TERRAFORM as ARTICLE
} from "@/lib/data/article/devops/iac";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const AWS_CONFIGURATION =
`provider "aws" {
  region = "ap-northeast-1"
}`;

const AWS_S3_BUCKET =
`/* Create ms-29.com S3 Bucket */
resource "aws_s3_bucket" "ms29_bucket" {
  bucket = "ms-29.com"
  
  tags = {
    Name = "MS-29"
    Environment = "Dev"
  }
}

/* Block all public access: Off */
resource "aws_s3_bucket_public_access_block" "ms29_public_access_block" {
  bucket = aws_s3_bucket.ms29_bucket.id
    
  block_public_acls       = false
  ignore_public_acls      = false
  restrict_public_buckets = false
  block_public_policy     = false
}

/* Public Read Bucket Policy */
resource "aws_s3_bucket_policy" "ms29_bucket_policy" {
  bucket = aws_s3_bucket.ms29_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = "*"
        Action = "s3:GetObject"
        Resource = "arn:aws:s3:::ms-29.com/*"
      }
    ]
  })
}`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.IAC.title,
    url: TOPICS.IAC.url
  }],
  current: ARTICLE.title
}

export default function TerraformSetup() {
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
            Infrastructure as Code (IaC) is changing how teams build and manage cloud infrastructure by turning manual processes into code. Terraform, developed by HashiCorp,
            is one of the most popular tools in the IaC space. It allows you to define and provision infrastructure using a declarative configuration language and supports a
            wide range of cloud providers, including AWS, Azure, and Google Cloud.
          </section>
          <section className="pt-4">
            Whether you are working on a small project or managing a large-scale production environment, Terraform can help you streamline your infrastructure management process.
            By using Terraform, you can ensure consistency, reduce manual errors, and improve collaboration among team members.
          </section>
          <h2 className="text-xl mt-6" id="salesforce-cli">
            <strong>Install Terraform</strong>
          </h2>
          <section>
            <ul className="list-disc ml-6 py-1 pl-2.5">
              <li>
                Install from <Link href="https://developer.hashicorp.com/terraform/install" className="text-blue-600" target="_blank">
                https://developer.hashicorp.com/terraform/install</Link>.
              </li>
              <li>
                Verify the installation using following command:
                <HighlightCode code="terraform -v" language="shell" path=""/>
              </li>
            </ul>
            You should see the installed version displayed, confirming it&apos;s ready to use.
          </section>
          <h2 className="text-xl mt-6">
            <strong>Initialize Terraform Project</strong>
          </h2>
          <section>
            Go to the directory where you want to create your Terraform project and create a sample configuration file named <code>main.tf</code>.
            This file will contain the configuration for the resources you want to provision.
            <HighlightCode code={AWS_CONFIGURATION} language="terraform" path="main.tf"/>
            <div className="pt-4">
              Now that you have defined AWS as a provider in the configuration file, the next step is to initialize the Terraform project.
              Run the following command in the terminal:
              <HighlightCode code="terraform init" language="shell" path=""/>
              <div className="pt-2">
                This command downloads the required provider plugins and configures the backend to keep track to the state of your infrastructure.
              </div>
            </div>
          </section>
          <h2 className="text-xl mt-6">
            <strong>Provision AWS S3 with Read Access</strong>
          </h2>
          <section>
            To provision an AWS S3 bucket with read access, you can add the following code to your <code>main.tf</code> file:
            <HighlightCode code={AWS_S3_BUCKET} language="terraform" path="main.tf"/>
            <div className="pt-2">
              This config creates an S3 bucket named <code className="code-inline">ms-29.com</code> in the <code className="code-inline">ap-northeast-1</code> region. It also sets up
              public access block configuration and bucket policy to allow public read access. <strong>Make sure to replace the bucket name with a unique name, as S3 bucket names must be globally unique across all AWS accounts</strong>.
            </div>
            <div className="pt-4">
              You can format and validate the configuration file using the following command:
              <HighlightCode code="terraform fmt && terraform validate" language="shell" path=""/>
            </div>
          </section>
          <h2 className="text-xl mt-6">
            <strong>Configure AWS Credentials</strong>
          </h2>
          <section>
            Assuming you have already created IAM user with programmatic access and attached necessary policies, such as <strong>AmazonS3FullAccess</strong> policy.
            To configure your AWS credentials using the following command:
            <HighlightCode code="aws configure" language="shell" path=""/>
            <div className="pt-2">
              This command will prompt you to enter your AWS Access Key ID, Secret Access Key, default region name, and output format. Once configured, Terraform will be
              able to interact with AWS services, including provisioning an S3 bucket with public read access.
            </div>
          </section>
          <h2 className="text-xl mt-6">
            <strong>Apply the Configuration into AWS</strong>
          </h2>
          <section>
            Before applying the configuration, it is a good practice to check the execution plan using the following
            command:
            <HighlightCode code="terraform plan" language="shell" path=""/>
            <div className="pt-2">
              This command will show you what changes Terraform will make to your infrastructure based on the configuration file.
              Review output carefully to ensure it matches your expectations.
            </div>
            <div className="pt-4">
              To apply the configuration and provision the resources, run the following command:
            </div>
            <HighlightCode code="terraform apply" language="shell" path=""/>
            <div className="pt-2">
              Terraform will show you a preview of the changes it will make. Type <code className="code-inline">yes</code> to confirm and proceed with the provisioning.
            </div>
            <div className="pt-4">
              After the provisioning is complete, you can verify the S3 bucket creation in the AWS Management Console. You should see a bucket
              named <code className="code-inline">ms-29.com</code> listed under S3 service. Also, check the bucket policy and public access settings to confirm that
              public read access is enabled.
            </div>
            <div className="pt-4">
              To verify public read access, upload a test file to the S3 bucket and try to access it. You should be able to access the file using the following URL
              format: <code className="code-inline background">{'https://s3.{REGION}.amazonaws.com/{BUCKET}/{FILENAME}'}</code>
            </div>
            <div className="pt-4">
              To destroy the resources created by Terraform, you can run the following command:
              <HighlightCode code="terraform destroy" language="shell" path=""/>
              <div className="pt-2">
                This command will remove all the resources defined in your configuration file. Again, review the output carefully before confirming the destruction.
              </div>
            </div>
          </section>
          <section className="pt-6">
            Congratulations! You have successfully installed and configured Terraform, and provision an AWS S3 bucket with public read access.
            You can now use Terraform to manage your infrastructure as code, making it easier to version control, collaborate, and automate your cloud resources.
            With its declarative configuration language and extensive provider support, you can automate the entire lifecycle of your infrastructure.
            <div className="py-4">
              As you continue your journey with Terraform, consider exploring advanced features such as modules, state management, and remote backends.
              These features will help you scale your infrastructure management practices and make your workflows even more efficient.
            </div>
            <div className="pt-4">
              If you have any questions or need further assistance, feel free to leave a comment below or refer to official Terraform documentation.
              Happy provisioning!
            </div>
          </section>
        </div>
      </article>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
