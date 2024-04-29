import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  alternates: {
    canonical: "/about-us"
  }
};

export default function About() {
  return (
    <h1 className="text-2xl" itemProp="name">
      About Us
    </h1>
  ); 
}
