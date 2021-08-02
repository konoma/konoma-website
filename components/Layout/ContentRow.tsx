import React from 'react';
import { BaseComponentProps } from '../../helper/classNames';

interface ContentRowProps extends BaseComponentProps {}

const ContentRow: React.FunctionComponent<ContentRowProps> = (props) => {
  const { className = '', children } = props;

  return <div className={`${className} px-8 md:px-16 xl:px-0 max-w-7xl mx-auto`}>{children}</div>;
};

export default ContentRow;
