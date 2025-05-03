import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import FAQ from "@/components/faq/faq";
import TOPICS from "@/lib/data/article/topics";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import { WEB_OPTIMIZED_IMAGE_DELIVERY_FOR_CUSTOM_COMPONENTS as ARTICLE } from "@/lib/data/article/aem/cloud";

import enable_web_optimized_images from "./assets/enable-web-optimized-images.webp";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const web_optimized_image_service_impl = 
`@Component
public class WebOptimizedImageServiceImpl implements WebOptimizedImageService {
  private static final String DEFAULT_FORMAT = "webp";

  @Reference(cardinality = ReferenceCardinality.OPTIONAL)
  private volatile AssetDelivery assetDelivery;

  @Override
  public String getDeliveryURL(ResourceResolver resourceResolver, String path) {
    Resource resource = resourceResolver.getResource(path);
    Asset asset = DamUtil.resolveToAsset(resource);

    if (assetDelivery != null) {
      return getWebOptimizedUrl(resource, asset);
    } else {
      return getFallbackUrl(asset);
    }
  }

  private String getWebOptimizedUrl(Resource resource, Asset asset) {
    Map<String, Object> options = new HashMap<>();
    options.put("preferwebp", "true");

    // These 3 options are required for the AssetDelivery API to work
    options.put("path", asset.getPath());
    options.put("format", DEFAULT_FORMAT);
    options.put("seoname", asset.getName());

    return assetDelivery.getDeliveryURL(resource, options);
  }

  private String getFallbackUrl(Asset asset) {
    return asset.getPath();
  }
}`;

const article_sling_model = 
`@Model(
  adaptables = { SlingHttpServletRequest.class },
  adapters = { Article.class },
  resourceType = { ArticleImpl.RESOURCE_TYPE },
  defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class ArticleImpl implements Article {
  protected static final String RESOURCE_TYPE = "aem-demo/components/article";

  @SlingObject
  protected ResourceResolver resourceResolver;

  @OSGiService
  private WebOptimizedImageService webOptimizedImageService;

  @ValueMapValue
  String fileReference;

  public String getImageUrl() {
    return webOptimizedImageService.getDeliveryURL(resourceResolver, fileReference);
  }
}
`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.AEM_CLOUD.title,
    url: TOPICS.AEM_CLOUD.url
  }],
  current: ARTICLE.title
}

export default function WebOptimizedImageDelivery() {
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
            Web Optimized Image Delivery feature of <strong>AEM as a Cloud Service</strong> delivers image assets from
            the DAM in WebP format. WebP can reduce the download size of an image by about 25% on average, which
            results in faster page loading.
          </section>
          <h2 id="core-component" className="text-xl mt-4">
            <strong>Using Core Components</strong>
          </h2>
          <section className="pb-2">
            The AEM Core Image and Teaser components offer the functionality for delivering web optimized images. To activate 
            this feature, you only need to enable the &quot;Enable Web Optimized Images&quot; option within the component&apos;s 
            design dialog.
          </section>
          <Image src={enable_web_optimized_images} className="border"
            alt="Enable Web Optimized Images for AEM Core Components">
          </Image>
          <div className="pt-2">
            To confirm the changes, you can navigate to &quot;View as Published&quot; by checking the content-type of loaded images 
            in the browser&apos;s developer tools network tab.
          </div>
          <h2 id="custom-component" className="text-xl mt-4">
            <strong>WebP Image for Custom Components</strong>
          </h2>
          <div className="pb-1">
            For Custom Components, AEM provides the <code className="code-inline">AssetDelivery</code> Java API, which acts as an OSGi 
            service that generates web optimized delivery URLs for image assets. The AssetDelivery OSGi Service functions in AEM as a 
            Cloud Service but returns null in the AEM SDK. It is best to conditionally use web optimized URLs selectively for Cloud 
            Service and fallback URLs for the SDK.
          </div>
          <Highlight code={web_optimized_image_service_impl} language="java" path="WebOptimizedImageServiceImpl.java"/>
          <div className="pt-2 pb-1">
            The Sling Model uses the custom WebOptimizedImageService OSGi service to obtain the web optimized image URL.
          </div>
          <Highlight code={article_sling_model} language="java" path="ArticleImpl.java"/>
          <div className="pt-1">
            You can now use the <code className="code-inline">imageUrl</code> in your component HTML and inspect the image&apos;s 
            content-type through the network tab of the browser&apos;s developer tools.
          </div>
        </div>
      </article>
      <FAQ items={[{
        question: "No option to Enable Web Optimized Images in my environment",
        answer: `Running AEM locally or on-premise, the image service isn’t available. To leverage the web optimized image 
          delivery service, need to deploy the project to an AEM as a Cloud Service (AEMaaCS) development environment.`
      }, {
        question: "Web Optimized Image Delivery works correctly in one custom component but not in others",
        answer: `Consider creating an OSGi service that acts as a proxy for the AssetDelivery OSGi Service, then utilize this 
          proxy OSGi service for all Sling Models instead of directly accessing the AssetDelivery API from each Sling Model.`
      }]}/>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
