import React from "react";
import { BaseComponentProps } from "../../helper/classNames";

interface CopyProps extends BaseComponentProps {
  type?: string;
  level?: "xs" | "sm" | "base" | "lead";
}
const Copy: React.FC<CopyProps> = (props) => {
  const { className, level, type, children } = props;
  const Element = type ?? ("p" as React.ElementType);
  const CopyLevel = level ?? "base";

  return (
    <Element
      className={`${
        CopyLevel === "xs" ? "font-sans font-normal text-xs text-gray-900" : ""
      } \
       ${
         CopyLevel === "sm"
           ? "font-sans font-normal text-sm lg:text-sm-desktop text-gray-900"
           : ""
       } \
       ${
         CopyLevel === "base"
           ? "font-sans font-medium text-base lg:text-base-desktop text-gray-900"
           : ""
       } \
       ${
         CopyLevel === "lead"
           ? "font-sans font-medium text-lg lg:text-lg-desktop text-gray-900"
           : ""
       } \
       ${className ?? ""}`}
    >
      {children}
    </Element>
  );
};

export default Copy;
