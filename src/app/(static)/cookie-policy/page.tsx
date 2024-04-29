import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  alternates: {
    canonical: "/cookie-policy"
  }
};

export default function CookiePolicy() {
  return (
    <h1 className="text-2xl" itemProp="name">
      Cookie Policy
    </h1>
  ); 
}
