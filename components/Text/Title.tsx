import React from 'react';
import { BaseComponentProps } from '../../helper/classNames';

interface TitleProps extends BaseComponentProps {}

const Title: React.FC<TitleProps> = (props) => {
  const { className, children } = props;

  return <h1 className={`font-serif font-medium text-2xl text-indigo-700 md:text-5xl ${className ?? ''}`}>{children}</h1>;
};

export default Title;
