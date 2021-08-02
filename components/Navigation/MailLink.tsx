import { IconMail } from '@components/icons';
import React from 'react';
import { BaseComponentProps } from '../../helper/classNames';

interface MailLinkProps extends BaseComponentProps {
  emailAddress: string;
  label: string;
  color?: string;
}

const MailLink: React.FC<MailLinkProps> = (props) => {
  const { emailAddress, label, color = 'blue-700' } = props;

  return (
    <div className="flex items-center">
      <IconMail className={`mr-2 w-6 text-blue-700 ${color}`} />
      <a href={`mailto:${emailAddress}`} className={`text-${color} font-medium text-xl`}>
        {label}
      </a>
    </div>
  );
};

export default MailLink;
