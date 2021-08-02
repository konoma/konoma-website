import React from 'react';
import { BaseComponentProps } from '../../helper/classNames';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

interface NavigationLinkProps extends BaseComponentProps {
  url: string;
  title: string;
}

const NavigationButton: React.FC<NavigationLinkProps> = (props) => {
  const { url, title, className } = props;

  const router = useRouter();
  const isActive = router.pathname.endsWith(url);

  return (
    <Link href={url}>
      <a
        className={`block bg-indigo-700 hover:bg-indigo-900 transition-colors text-white text-center font-medium rounded-3xl px-4 pt-2 pb-2`}
      >
        {title}
      </a>
    </Link>
  );
};

export default NavigationButton;
