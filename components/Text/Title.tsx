import React from 'react';
import { BaseComponentProps } from '../../helper/classNames';

interface TitleProps extends BaseComponentProps {}

const Title: React.FC<TitleProps> = (props) => {
  const { className, children } = props;

  return <h1 className={`font-sans font-medium text-2xl md:text-5xl ${className ?? ''}`}>{children}</h1>;
};

export default Title;
