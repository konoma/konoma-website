import { BaseComponentProps } from 'helper/classNames';
import React from 'react';
import { IconClose, IconMenu } from '@components/icons';

interface NavMobileButtonProps extends BaseComponentProps, React.HtmlHTMLAttributes<HTMLButtonElement> {
  toggled?: boolean;
}

const NavMobileButton: React.FC<NavMobileButtonProps> = props => {
  const { className, toggled, ...buttonProps } = props;

  const labelText = toggled ? "Close" : "Menu";
  const Icon = toggled ? IconClose : IconMenu;

  return <button
    {...buttonProps}
    className={`flex-initial inline-flex items-center px-3 font-medium \
                ${toggled ? 'text-blue-400' : ''}
                ${className ?? ""}`}>
    {labelText} <Icon className={`flex-initial w-3 h-3 ml-1.5`} />
  </button>;
}

export default NavMobileButton;