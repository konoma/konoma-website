import React from 'react';
import { BaseComponentProps } from '../../helper/classNames';

interface ContentRowProps extends BaseComponentProps {}

const ContentRow: React.FunctionComponent<ContentRowProps> = (props) => {
  const { className = '', children } = props;

  return <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>;
};

export default ContentRow;
