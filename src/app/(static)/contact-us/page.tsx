import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  alternates: {
    canonical: "/contact-us"
  }
};

export default function Contact() {
  return (
    <h1 className="text-2xl" itemProp="name">
      Contact Us
    </h1>
  ); 
}
