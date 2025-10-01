import { Metadata } from "next";
import Heading from "@/components/heading/heading";

export const metadata: Metadata = {
  title: "AEM Performance Optimization Case Study: Enterprise Website",
  description: "Detailed case study of AEM performance optimization for enterprise website serving 2M+ monthly visitors. Achieved 75% improvement in page load times and 60% reduction in server response times.",
  alternates: {
    canonical: "/case-studies/aem-performance-optimization-enterprise-website"
  }
};

export default function AEMPerformanceCaseStudyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <article className="max-w-4xl mx-auto py-12 px-6">
        <header className="mb-12">
          <Heading heading="h1">
            AEM Performance Optimization & Improvement
          </Heading>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">AEM Sites</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Performance</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Dispatcher</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Caching</span>
          </div>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Published on December 15, 2024 • Last updated December 15, 2024
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <Heading heading="h2">Executive Summary</Heading>
            <p>
              This case study details a comprehensive performance optimization project for a large enterprise AEM website 
              serving over 2 million monthly visitors. Through systematic analysis and targeted improvements, we achieved 
              a 75% reduction in page load times and 60% improvement in server response times, resulting in significant 
              improvements in user experience and business metrics.
            </p>
          </section>

          <section className="mb-12">
            <Heading heading="h2">Project Overview</Heading>
            
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <Heading heading="h3">Key Metrics</Heading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <strong>Before Optimization:</strong>
                  <ul className="mt-2 text-sm">
                    <li>Average page load time: 8.2 seconds</li>
                    <li>Server response time: 2.1 seconds</li>
                    <li>Bounce rate: 47%</li>
                    <li>Core Web Vitals score: 23/100</li>
                  </ul>
                </div>
                <div>
                  <strong>After Optimization:</strong>
                  <ul className="mt-2 text-sm">
                    <li>Average page load time: 2.1 seconds</li>
                    <li>Server response time: 0.8 seconds</li>
                    <li>Bounce rate: 28%</li>
                    <li>Core Web Vitals score: 89/100</li>
                  </ul>
                </div>
              </div>
            </div>

            <Heading heading="h3">Technology Stack</Heading>
            <ul>
              <li><strong>AEM Version:</strong> 6.5.17 (later migrated to Cloud Service)</li>
              <li><strong>Dispatcher:</strong> Apache HTTP Server 2.4 with AEM Dispatcher module</li>
              <li><strong>CDN:</strong> Adobe Managed CDN (Fastly)</li>
              <li><strong>Infrastructure:</strong> AWS EC2 instances with Auto Scaling</li>
              <li><strong>Database:</strong> Adobe Granite Oak with MongoDB</li>
            </ul>
          </section>

          <section className="mb-12">
            <Heading heading="h2">Performance Challenges Identified</Heading>
            
            <Heading heading="h3">1. Inefficient Component Rendering</Heading>
            <p>
              Analysis revealed that custom components were making excessive JCR queries, with some pages executing 
              over 200 individual queries. Heavy use of ResourceResolver without proper resource management was 
              causing memory leaks and degraded performance.
            </p>

            <Heading heading="h3">2. Suboptimal Caching Strategy</Heading>
            <p>
              The existing dispatcher configuration had minimal caching rules, with a cache hit ratio of only 23%. 
              Most dynamic content was being served directly from publish instances, overwhelming the servers 
              during peak traffic periods.
            </p>

            <Heading heading="h3">3. Large Asset Sizes</Heading>
            <p>
              Images and assets were not optimized, with average image sizes exceeding 2MB. No responsive image 
              delivery was implemented, causing poor performance on mobile devices.
            </p>

            <Heading heading="h3">4. Inefficient Client-Side Code</Heading>
            <p>
              JavaScript bundles were over 1.5MB in size with multiple render-blocking resources. No code splitting 
              or lazy loading strategies were implemented.
            </p>
          </section>

          <section className="mb-12">
            <Heading heading="h2">Optimization Strategies Implemented</Heading>

            <Heading heading="h3">1. AEM Component Optimization</Heading>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <Heading heading="h4">Sling Model Improvements</Heading>
              <p className="mb-4">
                Refactored Sling Models to use efficient query patterns and implemented proper caching:
              </p>
              <pre className="bg-slate-800 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
{`@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExtensionConstants.JSON)
public class OptimizedProductListModel {
    
    @Inject
    private ResourceResolver resourceResolver;
    
    @Cached(timeInSeconds = 300) // 5-minute cache
    public List<Product> getProducts() {
        // Optimized query using QueryBuilder
        Map<String, String> queryMap = new HashMap<>();
        queryMap.put("path", "/content/products");
        queryMap.put("type", "cq:Page");
        queryMap.put("p.limit", "20");
        
        // Single query instead of multiple individual queries
        Query query = queryBuilder.createQuery(PredicateGroup.create(queryMap), session);
        SearchResult result = query.getResult();
        
        return result.getResources().stream()
            .map(this::mapToProduct)
            .collect(Collectors.toList());
    }
}`}
              </pre>
            </div>

            <Heading heading="h4">Database Query Optimization</Heading>
            <ul>
              <li>Implemented proper indexing strategies for frequently queried properties</li>
              <li>Reduced individual component queries by 85% through batched operations</li>
              <li>Added query result caching at the Sling Model level</li>
              <li>Implemented lazy loading for secondary content sections</li>
            </ul>

            <Heading heading="h3">2. Dispatcher & CDN Configuration</Heading>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <Heading heading="h4">Enhanced Caching Rules</Heading>
              <pre className="bg-slate-800 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
{`# Dispatcher configuration improvements
/cache {
  /rules {
    # Cache HTML pages for 30 minutes
    /0001 {
      /glob "*.html"
      /type "allow"
      /headers "Cache-Control: max-age=1800, stale-while-revalidate=3600"
    }
    
    # Cache JSON endpoints for API responses
    /0002 {
      /glob "*.model.json"
      /type "allow"
      /headers "Cache-Control: max-age=600"
    }
    
    # Long-term caching for static assets
    /0003 {
      /glob "/content/dam/*"
      /type "allow"
      /headers "Cache-Control: max-age=31536000, immutable"
    }
  }
  
  /statfileslevel "3"  # Improved invalidation granularity
  /gracePeriod "300"   # Serve stale content during regeneration
}`}
              </pre>
            </div>

            <ul>
              <li>Increased cache hit ratio from 23% to 87%</li>
              <li>Implemented intelligent cache invalidation strategies</li>
              <li>Added edge-side includes (ESI) for personalized content blocks</li>
              <li>Configured CDN-level caching with proper TTL values</li>
            </ul>

            <Heading heading="h3">3. Asset Optimization & Delivery</Heading>
            
            <Heading heading="h4">Dynamic Media Implementation</Heading>
            <p>
              Migrated to AEM Dynamic Media for automated image optimization and responsive delivery:
            </p>
            
            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <pre className="bg-slate-800 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<!-- Responsive image delivery with Dynamic Media -->
<picture>
  <source media="(min-width: 1200px)" 
          srcset="/content/dam/images/hero.jpg?&wid=1200&fmt=webp 1x,
                  /content/dam/images/hero.jpg?&wid=2400&fmt=webp 2x">
  <source media="(min-width: 768px)" 
          srcset="/content/dam/images/hero.jpg?&wid=768&fmt=webp 1x,
                  /content/dam/images/hero.jpg?&wid=1536&fmt=webp 2x">
  <img src="/content/dam/images/hero.jpg?&wid=400&fmt=webp" 
       alt="Hero image" loading="lazy">
</picture>`}
              </pre>
            </div>

            <ul>
              <li>Reduced average image size by 78% through format optimization (WebP/AVIF)</li>
              <li>Implemented automatic responsive image delivery</li>
              <li>Added lazy loading for below-the-fold images</li>
              <li>Configured smart cropping for different viewport sizes</li>
            </ul>

            <Heading heading="h3">4. Frontend Performance Optimization</Heading>
            
            <Heading heading="h4">JavaScript & CSS Optimization</Heading>
            <ul>
              <li>Implemented code splitting reducing initial bundle size by 65%</li>
              <li>Added critical CSS inlining for above-the-fold content</li>
              <li>Implemented lazy loading for non-essential JavaScript modules</li>
              <li>Optimized third-party script loading with proper defer/async attributes</li>
            </ul>

            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <Heading heading="h4">Core Web Vitals Improvements</Heading>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <strong>Largest Contentful Paint (LCP)</strong>
                  <p>Before: 4.2s → After: 1.1s</p>
                </div>
                <div>
                  <strong>First Input Delay (FID)</strong>
                  <p>Before: 180ms → After: 45ms</p>
                </div>
                <div>
                  <strong>Cumulative Layout Shift (CLS)</strong>
                  <p>Before: 0.25 → After: 0.05</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <Heading heading="h2">Infrastructure & Deployment Improvements</Heading>
            
            <Heading heading="h3">1. AEM Cloud Service Migration</Heading>
            <p>
              Migrated from AEM 6.5 on-premise to AEM as a Cloud Service, providing:
            </p>
            <ul>
              <li>Automatic scaling based on traffic patterns</li>
              <li>Built-in CDN with global edge locations</li>
              <li>Improved security with regular automatic updates</li>
              <li>Enhanced monitoring and performance insights</li>
            </ul>

            <Heading heading="h3">2. Performance Monitoring Implementation</Heading>
            <ul>
              <li>Integrated New Relic for application performance monitoring</li>
              <li>Configured Google Analytics 4 for Core Web Vitals tracking</li>
              <li>Set up automated alerts for performance degradation</li>
              <li>Implemented real-user monitoring (RUM) for continuous optimization</li>
            </ul>
          </section>

          <section className="mb-12">
            <Heading heading="h2">Results & Business Impact</Heading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <Heading heading="h3">Performance Metrics</Heading>
                <ul className="text-sm">
                  <li>✅ 75% reduction in page load times</li>
                  <li>✅ 60% improvement in server response times</li>
                  <li>✅ 87% cache hit ratio (up from 23%)</li>
                  <li>✅ 89/100 Core Web Vitals score</li>
                  <li>✅ 78% reduction in image sizes</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <Heading heading="h3">Business Metrics</Heading>
                <ul className="text-sm">
                  <li>✅ 40% reduction in bounce rate</li>
                  <li>✅ 25% increase in page views per session</li>
                  <li>✅ 18% improvement in conversion rate</li>
                  <li>✅ 35% reduction in infrastructure costs</li>
                  <li>✅ 50% improvement in mobile experience scores</li>
                </ul>
              </div>
            </div>

            <Heading heading="h3">SEO & User Experience Impact</Heading>
            <p>
              The performance improvements led to significant SEO gains, with average organic search rankings 
              improving by 15 positions for target keywords. User engagement metrics showed a 32% increase 
              in average session duration and a 28% improvement in pages per session.
            </p>
          </section>

          <section className="mb-12">
            <Heading heading="h2">Lessons Learned & Best Practices</Heading>
            
            <Heading heading="h3">1. Performance is a Feature</Heading>
            <p>
              Performance optimization should be treated as a core product feature, not an afterthought. 
              Implementing performance budgets and continuous monitoring from the beginning of a project 
              prevents technical debt accumulation.
            </p>

            <Heading heading="h3">2. Data-Driven Optimization</Heading>
            <p>
              All optimization decisions were based on real performance data and user behavior analytics. 
              This approach ensured that efforts were focused on changes that would have the most significant 
              impact on user experience.
            </p>

            <Heading heading="h3">3. Holistic Approach</Heading>
            <p>
              Effective performance optimization requires addressing the entire technology stack - from 
              frontend code and assets to backend queries and infrastructure configuration. No single 
              optimization technique alone would have achieved these results.
            </p>

            <Heading heading="h3">4. Continuous Monitoring</Heading>
            <p>
              Performance optimization is an ongoing process. Regular monitoring, performance budgets, 
              and automated alerts help maintain optimal performance as the site evolves and grows.
            </p>
          </section>

          <section className="mb-12">
            <Heading heading="h2">Tools & Technologies Used</Heading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Heading heading="h3">Performance Analysis</Heading>
                <ul>
                  <li>Google PageSpeed Insights</li>
                  <li>WebPageTest.org</li>
                  <li>Chrome DevTools</li>
                  <li>New Relic APM</li>
                  <li>AEM Developer Tools</li>
                </ul>
              </div>
              
              <div>
                <Heading heading="h3">Optimization Tools</Heading>
                <ul>
                  <li>AEM Dynamic Media</li>
                  <li>Adobe Managed CDN (Fastly)</li>
                  <li>Webpack Bundle Analyzer</li>
                  <li>ImageOptim & Squoosh</li>
                  <li>Query Performance Tool</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <Heading heading="h2">Conclusion</Heading>
            <p>
              This comprehensive performance optimization project demonstrates the significant impact that 
              systematic performance improvements can have on both user experience and business metrics. 
              By addressing performance at multiple levels - component optimization, caching strategies, 
              asset delivery, and infrastructure improvements - we achieved substantial gains that directly 
              translated to improved user engagement and business outcomes.
            </p>
            
            <p>
              The key to success was treating performance as a core product requirement, implementing 
              data-driven optimization strategies, and maintaining a holistic view of the entire technology 
              stack. These principles and techniques can be applied to other AEM implementations to achieve 
              similar performance improvements.
            </p>
          </section>

          <div className="bg-slate-100 p-6 rounded-lg">
            <p className="text-sm text-slate-600">
              <strong>Note:</strong> This case study represents a real-world performance optimization project. 
              Some specific implementation details have been generalized to protect client confidentiality 
              while maintaining the educational value of the techniques and strategies described.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}