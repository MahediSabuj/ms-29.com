import Link from 'next/link';
import { ILink } from '@/types/link';

export default function LinkText({ url, text } : ILink) {
  if(url) {
    return (
      <Link className="text-[#3273dc]" href={url}>
        {text}
      </Link>
    );
  }
  
  return <span>{text}</span>;
}
