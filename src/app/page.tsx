import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MS-29 | Modern Technology Insights",
  description: "Explore cutting-edge technology insights, tutorials, and best practices in AEM, AWS, Spring Boot, and competitive programming. European-inspired design meets technical excellence.",
  alternates: {
    canonical: "/"
  }
};

const featuredTopics = [
  {
    title: "Adobe Experience Manager",
    description: "Comprehensive guides on AEM Sites, Assets, Forms, and Cloud Service implementations",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><defs><radialGradient id="a" cx="352" cy="352" r="512" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3a2a1d"/><stop offset="1" stop-color="#241405"/></radialGradient></defs><circle fill="url(#a)" cx="512" cy="512" r="512"/><path fill="#ff7618" d="M71 512c0 243.6 197.4 441 441 441s441-197.4 441-441S755.6 71 512 71 71 268.4 71 512zm45-.5c.3-218.7 177.8-395.8 396.5-395.5S908.3 293.8 908 512.5 730.5 908 512 908 115.9 730.4 116 511.6z"/><path fill="#ffe0cb" d="M787 512a96.5 96.5 0 0 0-54.3-86.7 102.4 102.4 0 0 0-134-134 96.4 96.4 0 0 0-173.4 0 102.4 102.4 0 0 0-134 134 96.4 96.4 0 0 0 0 173.4 102.4 102.4 0 0 0 134 134 96.4 96.4 0 0 0 173.4 0 102.4 102.4 0 0 0 134-134A96.5 96.5 0 0 0 787 512zm-94.7-180.3a76.6 76.6 0 0 1 15.5 85.5 97.4 97.4 0 0 0-17.2-1.6 82.3 82.3 0 0 1-82.2-82.2 97.4 97.4 0 0 0-1.6-17.2 76.6 76.6 0 0 1 85.5 15.5zm-98.6 368.5a86.4 86.4 0 0 1-9.3-7.9 102.4 102.4 0 0 0-144.8 0 86.4 86.4 0 0 1-9.3 7.9 75 75 0 0 1-.6-9.6 96.4 96.4 0 0 0-96.3-96.3 75 75 0 0 1-9.6-.6 86.4 86.4 0 0 1 7.9-9.3 102.4 102.4 0 0 0 0-144.8 86.4 86.4 0 0 1-7.9-9.3 75 75 0 0 1 9.6-.6 96.4 96.4 0 0 0 96.3-96.3 75 75 0 0 1 .6-9.6 86.4 86.4 0 0 1 9.3 7.9 102.4 102.4 0 0 0 144.8 0 86.4 86.4 0 0 1 9.3-7.9 75 75 0 0 1 .6 9.6 96.4 96.4 0 0 0 96.3 96.3 75 75 0 0 1 9.6.6 86.4 86.4 0 0 1-7.9 9.3 102.4 102.4 0 0 0 0 144.8 86.4 86.4 0 0 1 7.9 9.3 75 75 0 0 1-9.6.6 96.4 96.4 0 0 0-96.3 96.3 75 75 0 0 1-.6 9.6zM512 251.1a82.3 82.3 0 0 1 74.1 46.5 103.6 103.6 0 0 0-20.2 15.7 76.3 76.3 0 0 1-107.8 0 103.6 103.6 0 0 0-20.2-15.7 82.3 82.3 0 0 1 74.1-46.5zm-180.3 80.6a76.6 76.6 0 0 1 85.5-15.5 97.4 97.4 0 0 0-1.6 17.2 82.3 82.3 0 0 1-82.2 82.2 97.4 97.4 0 0 0-17.2 1.6 76.6 76.6 0 0 1 15.5-85.5zM251.1 512a82.3 82.3 0 0 1 46.5-74.1 103.6 103.6 0 0 0 15.7 20.2 76.3 76.3 0 0 1 0 107.8 103.6 103.6 0 0 0-15.7 20.2 82.3 82.3 0 0 1-46.5-74.1zm80.6 180.3a76.6 76.6 0 0 1-15.5-85.5 97.4 97.4 0 0 0 17.2 1.6 82.3 82.3 0 0 1 82.2 82.2 97.4 97.4 0 0 0 1.6 17.2 76.6 76.6 0 0 1-85.5-15.5zM512 772.9a82.3 82.3 0 0 1-74.1-46.5 103.6 103.6 0 0 0 20.2-15.7 76.3 76.3 0 0 1 107.8 0 103.6 103.6 0 0 0 20.2 15.7 82.3 82.3 0 0 1-74.1 46.5zm180.3-80.6a76.6 76.6 0 0 1-85.5 15.5 97.4 97.4 0 0 0 1.6-17.2 82.3 82.3 0 0 1 82.2-82.2 97.4 97.4 0 0 0 17.2-1.6 76.6 76.6 0 0 1-15.5 85.5zm34.1-106.2a103.6 103.6 0 0 0-15.7-20.2 76.3 76.3 0 0 1 0-107.8 103.6 103.6 0 0 0 15.7-20.2 82.3 82.3 0 0 1 0 148.2z"/></svg>`,
    count: "50+ Articles"
  },
  {
    title: "Amazon Web Services",
    description: "Deep dives into AWS services including Cognito, EC2, SES, and cloud architecture",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#fff" d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"/></svg>`,
    count: "5+ Articles"
  },
  {
    title: "Spring Boot Development",
    description: "Modern Java application development with Spring Boot 3.x and best practices",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#fff" d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"/></svg>`,
    count: "5+ Articles"
  },
  {
    title: "Competitive Programming",
    description: "Algorithm challenges, data structures, and problem-solving techniques",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#fff" d="M392.8 1.2c-17-4.9-34.7 5.2-39.6 22.2l-128 448c-4.9 17 5.2 34.7 22.2 39.6s34.7-5.2 39.6-22.2l128-448c4.9-17-5.2-34.7-22.2-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.3 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>`,
    count: "10+ Articles"
  }
];

const stats = [
  { number: "60+", label: "Technical Articles" },
  { number: "1K+", label: "Monthly Readers" },
  { number: "10+", label: "Technology Stacks" },
  { number: "10+", label: "Years Experience" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Enterprise Technology<br />
            Solutions
          </h1>
          <p className="hero-subtitle">
            Discover comprehensive guides, best practices, and cutting-edge solutions
            <br />
            in enterprise technology and software development.
          </p>
          <Link href="/blogs" className="hero-cta">
            Explore Articles
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stats-card">
                <div className="stats-number">{stat.number}</div>
                <div className="stats-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Technology Expertise</h2>
            <p className="section-subtitle">
              Deep-dive into the technologies that power modern applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredTopics.map((topic, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <div dangerouslySetInnerHTML={{__html: topic.icon}} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{topic.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{topic.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {topic.count}
                  </span>
                  <Link href="/blogs" className="text-slate-500 hover:text-slate-700 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{color: '#3A2A1D'}}>
            Technical Excellence & Clean Design
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            MS-29 combines technical depth with clean, sophisticated design.
            Our content focuses on practical solutions, best practices, and real-world implementations
            that help developers and architects build better systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blogs" className="button-secondary">
              Browse All Articles
            </Link>
            <Link href="/profile/mahedi-sabuj" className="button-primary">
              About the Author
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Articles Preview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Latest Insights</h2>
            <p className="section-subtitle">
              Stay updated with the newest technical content and tutorials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/aws/cognito/setup-cognito-user-pool-for-spa" className="blog-card">
              <div className="blog-title">AWS Cognito User Pool Setup for SPA</div>
              <p className="blog-excerpt">
                Learn how to configure AWS Cognito User Pool for single page applications with comprehensive setup instructions.
              </p>
              <div className="blog-meta">
                <span>AWS</span>
                <span>Aug 30, 2025</span>
              </div>
            </Link>

            <Link href="/backend/spring-boot/user-registration-and-login-using-spring-security" className="blog-card">
              <div className="blog-title">Spring Security User Registration & Authentication</div>
              <p className="blog-excerpt">
                Complete guide to implementing user registration and login functionality using Spring Security 6.x and Spring Boot 3.4.4.
              </p>
              <div className="blog-meta">
                <span>Spring Boot</span>
                <span>Aug 28, 2025</span>
              </div>
            </Link>

            <Link href="/aem/sites/context-aware-configuration" className="blog-card">
              <div className="blog-title">Apache Sling Context Aware Configuration</div>
              <p className="blog-excerpt">
                Master context-aware configurations in AEM with hierarchical inheritance and wcm.io integration.
              </p>
              <div className="blog-meta">
                <span>AEM</span>
                <span>Aug 19, 2025</span>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link href="/blogs" className="button-primary">
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
