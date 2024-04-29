import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-aem">
      <div className="py-2">
        <ul className="flex flex-row justify-center text-[#0D9DDA]">
          <li className="inline-flex items-center px-4">
            <Link href="/about-us">About Us</Link>
          </li>
          <li className="inline-flex items-center px-4">
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <li className="inline-flex items-center px-4">
            <Link href="/cookie-policy">Cookie Policy</Link>
          </li>
          <li className="inline-flex items-center px-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li className="inline-flex items-center px-4">
            <Link href="/terms-of-use">Terms of Use</Link>
          </li>
        </ul>
        <div className="text-center text-white">
          Copyright &copy; 2024 MS-29. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
