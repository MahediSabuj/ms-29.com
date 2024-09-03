import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  alternates: {
    canonical: "/cookie-policy"
  }
};

export default function CookiePolicy() {
  return (
    <div>
      <h1 className="text-2xl" itemProp="name">
        Cookie Policy
      </h1>
      <div className="pt-6">
        Cookies are small pieces of information that are stored by your browser on your computer&apos;s hard drive. They are often used as a mechanism 
        for websites to remember useful information, such as your login details, and can contribute to ease of use when navigating a website. Our cookies 
        cannot identify you personally.
      </div>
      <div className="pt-3">
        Cookies help MS-29 to track use at the Site. MS-29 may use this information for improvements and updates to the Site.
      </div>
      <div className="relative overflow-x-auto mt-2">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase border">
            <tr>
              <th scope="col" className="min-w-36 px-6 py-3 border-r">
                Cookie Name
              </th>
              <th scope="col" className="px-6 py-3">
                Purpose
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-x">
              <td scope="row" className="px-6 py-4 font-medium border-r whitespace-nowrap">
                _ga<br/>_gat_UA...
              </td>
              <td className="px-6 py-4">
                These cookies enable us to anonymously track how visitors access and browse our website, thereby enabling us to optimise and improve our service.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='mt-3'>
        Our policies and procedures are under continual review. We may, from time to time, update our cookies policy. Any such changes will be posted on this page.
      </div>
    </div>
  ); 
}
