import React from 'react';
import { BaseComponentProps } from '../../helper/classNames';

interface LimitedWithBlockProps extends BaseComponentProps {}

const LimitedWithBlock: React.FunctionComponent<LimitedWithBlockProps> = (props) => {
  const { className = '', children } = props;

  return <div className={`max-w-4xl ${className}`}>{children}</div>;
};

export default LimitedWithBlock;
