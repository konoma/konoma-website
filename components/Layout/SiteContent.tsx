import { BaseComponentProps } from "../../helper/classNames";
import React from "react";

interface SiteContainerProps extends BaseComponentProps {}

const SiteContent: React.FC<SiteContainerProps> = (props) => {
  const { className, children } = props;

  return (
    <div
      className={`pt-15 lg:pt-25 space-y-6 lg:space-y-10 2xl:space-y-15
                ${className ?? ""}`}
    >
      {children}
    </div>
  );
};

export default SiteContent;
