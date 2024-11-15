import { IHeading } from "@/types/article";

export default function Heading({ heading, children } : IHeading) {
  const HEADLINE : keyof JSX.IntrinsicElements = heading;
  return (
    <HEADLINE className='text-2xl mt-8 mb-2'>
      {children}
    </HEADLINE>
  )
}
