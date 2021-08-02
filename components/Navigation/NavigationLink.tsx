import React from 'react';
import { BaseComponentProps } from '../../helper/classNames';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

interface NavigationLinkProps extends BaseComponentProps {
  url: string;
  title: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = (props) => {
  const { url, title, className } = props;

  const router = useRouter();
  const isActive = router.pathname.endsWith(url);

  return (
    <Link href={url}>
      <a className={`font-medium ${isActive ? 'text-indigo-700' : 'text-black hover:text-indigo-700'} ${className}`}>
        <span className="block h-0.5 bg-white" />
        <span className="block mt-1 mb-1">{title}</span>
        <span className={`block h-0.5 w-5 mx-auto ${isActive ? 'bg-indigo-700' : 'bg-white'}`} />
      </a>
    </Link>
  );
};

export default NavigationLink;
