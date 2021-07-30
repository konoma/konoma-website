import { IconArrow } from '@components/icons';
import Link from 'next/link';
import React from 'react';
import { BaseComponentProps } from '../../helper/classNames';

interface PageLinkProps extends BaseComponentProps {
  href: string;
  label: string;
  color?: string;
}

const PageLink: React.FC<PageLinkProps> = (props) => {
  const { href, label, color = 'blue-700' } = props;

  return (
    <div className="flex items-center">
      <Link href={href}>
        <a className={`text-${color} font-medium text-xl`}>{label}</a>
      </Link>
      <IconArrow className={`ml-2 w-6 text-${color} `} />
    </div>
  );
};

export default PageLink;
