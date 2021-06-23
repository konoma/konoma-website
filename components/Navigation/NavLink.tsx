import React from 'react';
import { BaseComponentProps } from '../../helper/classNames';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

interface NavLinkProps extends BaseComponentProps {
  to: string;
  title?: string;
  children?: string;
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  const { className, to, title } = props;

  const router = useRouter();
  const isActive = to.startsWith(router.pathname);

  return (
    <Link href={to} passHref>
      <a
        className={`flex flex-col justify-center items-center
                    font-sans font-medium text-sm md:text-sm-desktop
                    group hover:text-indigo-500 focus:outline-none focus:text-indigo-500 active:text-indigo-900 transition-colors
                    ${isActive ? 'text-indigo-700' : 'text-gray-900'}
                    ${className ?? ''}`}
        title={title}
      >
        <span className={`w-3 h-[2px] mb-0.5 bg-transparent`} />

        <span>{title}</span>

        <span
          className={`w-4 h-[2px] mt-0.5 bg-current \
                    group-hover:opacity-100 group-active:opacity-0 transition-opacity \
                    ${isActive ? 'opacity-100' : 'opacity-0'}`}
        />
      </a>
    </Link>
  );
};

export default NavLink;
