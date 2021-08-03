import React from 'react';
import { BaseComponentProps } from '../../helper/classNames';

interface TextProps extends BaseComponentProps {}

const Text: React.FC<TextProps> = (props) => {
  const { className, children } = props;

  return <p className={`text-xl mb-10 ${className ?? ''}`}>{children}</p>;
};

export default Text;
