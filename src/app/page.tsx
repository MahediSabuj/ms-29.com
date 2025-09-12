import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MS-29",
  description: "Explore cutting-edge technology insights, tutorials, and best practices in AEM, AWS, Spring Boot, and competitive programming.",
  alternates: {
    canonical: "/"
  }
};

const featuredTopics = [
  {
    title: "Adobe Experience Manager",
    description: "Comprehensive guides on AEM Sites, Assets, Forms, and Cloud Service implementations",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.4085 21.4998H17.3517C17.1755 21.5033 17.0022 21.451 16.8541 21.3498C16.7059 21.2485 16.5895 21.1028 16.5197 20.9313L12.1156 10.0158C12.1041 9.97331 12.08 9.93588 12.0468 9.90904C12.0137 9.88221 11.9733 9.86741 11.9316 9.86683C11.8899 9.86626 11.8491 9.87994 11.8153 9.90585C11.7815 9.93176 11.7565 9.96852 11.744 10.0107L8.99933 16.9412C8.98444 16.9787 8.97852 17.0195 8.98211 17.06C8.9857 17.1005 8.99869 17.1394 9.01991 17.1733C9.04114 17.2072 9.06994 17.235 9.10376 17.2542C9.13758 17.2734 9.17536 17.2835 9.21374 17.2835H12.2306C12.322 17.2835 12.4114 17.312 12.4876 17.3655C12.5638 17.419 12.6234 17.4951 12.6591 17.5843L13.9799 20.7001C14.0149 20.7875 14.0289 20.8828 14.0207 20.9773C14.0125 21.0719 13.9824 21.1629 13.9329 21.2421C13.8835 21.3213 13.8163 21.3863 13.7374 21.4313C13.6585 21.4762 13.5703 21.4998 13.4807 21.4998H2.49773C2.41512 21.4993 2.33392 21.4771 2.26136 21.4353C2.1888 21.3934 2.12714 21.3332 2.08187 21.26C2.0366 21.1867 2.00913 21.1027 2.00192 21.0155C1.9947 20.9283 2.00795 20.8405 2.0405 20.76L9.02651 3.12518C9.09791 2.93853 9.22074 2.77904 9.37896 2.66753C9.53719 2.55602 9.72345 2.49766 9.91344 2.50009H13.9428C14.1328 2.49742 14.3192 2.55567 14.4775 2.66722C14.6358 2.77876 14.7586 2.93839 14.8298 3.12518L21.8642 20.76C21.8967 20.8404 21.91 20.928 21.9029 21.0151C21.8958 21.1022 21.8684 21.1861 21.8234 21.2593C21.7783 21.3326 21.7168 21.3928 21.6444 21.4348C21.572 21.4767 21.491 21.4991 21.4085 21.4998Z" fill="#EB1000"/></svg>`,
    count: "50+ Articles"
  },
  {
    title: "Amazon Web Services",
    description: "Deep dives into AWS services including Cognito, EC2, SES, and cloud architecture",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#fff" d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"/></svg>`,
    count: "8+ Articles"
  },
  {
    title: "Spring Boot & Java",
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

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-10 pb-10 px-6 flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Passionate about building scalable MarTech solutions with
                <span className="font-semibold text-slate-700"> AEM, AWS, Salesforce, Spring Boot</span> and
                sharing insights through technical writing and community engagement.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/blogs" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Explore Articles
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/profile/mahedi-sabuj" className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-full hover:border-slate-400 hover:bg-slate-50 transition-all duration-300">
                About Me
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">13K+</div>
                <div className="text-sm text-slate-600">Total Views</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">11+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">15+</div>
                <div className="text-sm text-slate-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">6+</div>
                <div className="text-sm text-slate-600">Certifications</div>
              </div>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="relative lg:block hidden">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 to-blue-100 p-8">
              {/* Floating Cards */}
              <div className="absolute top-12 left-12 bg-white rounded-2xl p-6 shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.4085 21.4998H17.3517C17.1755 21.5033 17.0022 21.451 16.8541 21.3498C16.7059 21.2485 16.5895 21.1028 16.5197 20.9313L12.1156 10.0158C12.1041 9.97331 12.08 9.93588 12.0468 9.90904C12.0137 9.88221 11.9733 9.86741 11.9316 9.86683C11.8899 9.86626 11.8491 9.87994 11.8153 9.90585C11.7815 9.93176 11.7565 9.96852 11.744 10.0107L8.99933 16.9412C8.98444 16.9787 8.97852 17.0195 8.98211 17.06C8.9857 17.1005 8.99869 17.1394 9.01991 17.1733C9.04114 17.2072 9.06994 17.235 9.10376 17.2542C9.13758 17.2734 9.17536 17.2835 9.21374 17.2835H12.2306C12.322 17.2835 12.4114 17.312 12.4876 17.3655C12.5638 17.419 12.6234 17.4951 12.6591 17.5843L13.9799 20.7001C14.0149 20.7875 14.0289 20.8828 14.0207 20.9773C14.0125 21.0719 13.9824 21.1629 13.9329 21.2421C13.8835 21.3213 13.8163 21.3863 13.7374 21.4313C13.6585 21.4762 13.5703 21.4998 13.4807 21.4998H2.49773C2.41512 21.4993 2.33392 21.4771 2.26136 21.4353C2.1888 21.3934 2.12714 21.3332 2.08187 21.26C2.0366 21.1867 2.00913 21.1027 2.00192 21.0155C1.9947 20.9283 2.00795 20.8405 2.0405 20.76L9.02651 3.12518C9.09791 2.93853 9.22074 2.77904 9.37896 2.66753C9.53719 2.55602 9.72345 2.49766 9.91344 2.50009H13.9428C14.1328 2.49742 14.3192 2.55567 14.4775 2.66722C14.6358 2.77876 14.7586 2.93839 14.8298 3.12518L21.8642 20.76C21.8967 20.8404 21.91 20.928 21.9029 21.0151C21.8958 21.1022 21.8684 21.1861 21.8234 21.2593C21.7783 21.3326 21.7168 21.3928 21.6444 21.4348C21.572 21.4767 21.491 21.4991 21.4085 21.4998Z" />
                  </svg>
                </div>
                <div className="font-semibold text-slate-900">Adobe AEM</div>
                <div className="text-sm text-slate-600">50+ Articles</div>
              </div>
              
              <div className="absolute top-32 right-12 bg-white rounded-2xl p-6 shadow-xl -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" viewBox="0 0 640 512">
                    <path fill="#fff" d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"/>
                  </svg>
                </div>
                <div className="font-semibold text-slate-900">AWS Cloud</div>
                <div className="text-sm text-slate-600">8+ Articles</div>
              </div>
              
              <div className="absolute bottom-32 left-24 bg-white rounded-2xl p-6 shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
                  </svg>
                </div>
                <div className="font-semibold text-slate-900">Spring Boot</div>
                <div className="text-sm text-slate-600">5+ Articles</div>
              </div>
              
              <div className="absolute bottom-12 right-24 bg-white rounded-2xl p-6 shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" viewBox="0 0 640 512">
                    <path fill="#fff" d="M392.8 1.2c-17-4.9-34.7 5.2-39.6 22.2l-128 448c-4.9 17 5.2 34.7 22.2 39.6s34.7-5.2 39.6-22.2l128-448c4.9-17-5.2-34.7-22.2-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.3 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
                  </svg>
                </div>
                <div className="font-semibold text-slate-900">Algorithms</div>
                <div className="text-sm text-slate-600">10+ Articles</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-100 to-pink-100 rounded-full opacity-30 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full opacity-20 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
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
            A bit about my journey
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Started coding in university with competitive programming, got my first job working on ASP.NET, and somehow
            ended up specializing in marketing technology. These days, I spend most of my time with AEM, AWS, Salesforce, and Spring Boot.
            I write here because I wish I had these resources when I was figuring things out. Maybe they&apos;ll help you avoid
            some of the headaches I had to work through.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blogs" className="button-secondary">
              Browse My Posts
            </Link>
            <Link href="/profile/mahedi-sabuj" className="button-primary">
              Learn More About Me
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

            <Link href="/aem/sites/context-aware-configuration" className="blog-card">
              <div className="blog-title">Apache Sling Context Aware Configuration</div>
              <p className="blog-excerpt">
                Master context-aware configurations in AEM with hierarchical inheritance and wcm.io integration.
              </p>
              <div className="blog-meta">
                <span>AEM</span>
                <span>Aug 23, 2025</span>
              </div>
            </Link>

            <Link href="/backend/spring-boot/user-registration-and-login-using-spring-security" className="blog-card">
              <div className="blog-title">Spring Security User Registration & Authentication</div>
              <p className="blog-excerpt">
                Complete guide to implementing user registration and login functionality using Spring Security 6.x and Spring Boot 3.4.4.
              </p>
              <div className="blog-meta">
                <span>Spring Boot</span>
                <span>Aug 11, 2025</span>
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