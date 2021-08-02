import React from 'react';
import { BaseComponentProps } from 'helper/classNames';
import { IconClose, IconMenu } from '@components/icons';
import { useTranslation } from 'react-i18next';

interface NavMobileButtonProps extends BaseComponentProps, React.HtmlHTMLAttributes<HTMLButtonElement> {
  toggled?: boolean;
}

const NavMobileButton: React.FC<NavMobileButtonProps> = (props) => {
  const { className, toggled, ...buttonProps } = props;
  const { t } = useTranslation();

  const labelText = toggled ? t('Close') : t('Menu');
  const Icon = toggled ? <IconClose /> : <IconMenu />;

  return (
    <div className="flex flex-col justify-center align-middle">
      <button
        {...buttonProps}
        className={`
                flex items-center
                font-sans font-medium
                hover:text-indigo-500 focus:outline-none focus:text-indigo-500 active:text-indigo-900 transition-colors
                ${toggled ? 'text-indigo-700' : 'text-gray-900'}
                ${className ?? ''}`}
      >
        <span className="leading-none mr-3">{labelText}</span> <span className="w-6 h-6">{Icon}</span>
      </button>
    </div>
  );
};

export default NavMobileButton;
