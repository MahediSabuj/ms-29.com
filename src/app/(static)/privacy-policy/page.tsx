import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: {
    canonical: "/privacy-policy"
  }
};

export default function PrivacyPolicy() {
  return (
    <h1 className="text-2xl" itemProp="name">
      Privacy Policy
    </h1>
  ); 
}
