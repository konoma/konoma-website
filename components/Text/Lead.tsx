import React from 'react';
import { BaseComponentProps } from '../../helper/classNames';

interface LeadProps extends BaseComponentProps {}

const Lead: React.FC<LeadProps> = (props) => {
  const { className, children } = props;

  return <p className={`font-sans font-medium md:text-2xl ${className ?? ''}`}>{children}</p>;
};

export default Lead;
