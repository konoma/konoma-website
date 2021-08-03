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
    <div>
      <Link href={href} passHref>
        <a className={`text-${color} font-medium text-xl`}>
          <span className="flex items-center">
            <span>{label}</span>
            <IconArrow className={`ml-2 w-6 text-${color}`} />
          </span>
        </a>
      </Link>
    </div>
  );
};

export default PageLink;
