import React from 'react';
import { BaseComponentProps } from '../../helper/classNames';

interface SubTitleProps extends BaseComponentProps {}

const SubTitle: React.FC<SubTitleProps> = (props) => {
  const { className, children } = props;

  return <h2 className={`font-serif font-medium text-indigo-700 text-2xl md:text-4xl mb-8 md:mb-12 ${className ?? ''}`}>{children}</h2>;
};

export default SubTitle;
