import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  alternates: {
    canonical: "/terms-of-use"
  }
};

export default function TermsOfUse() {
  return (
    <h1 className="text-2xl" itemProp="name">
      Terms of Use
    </h1>
  ); 
}
