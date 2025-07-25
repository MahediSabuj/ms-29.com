import Link from 'next/link';
import { ILink } from '@/types/link';

export default function LinkText({ url, text } : ILink) {
  if(url) {
    return (
      <Link className="modern-link group-hover:text-primary-600" href={url}>
        {text}
      </Link>
    );
  }
  
  return <span>{text}</span>;
}
