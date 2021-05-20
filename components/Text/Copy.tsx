import React from "react";
import { BaseComponentProps } from "../../helper/classNames";

interface CopyProps extends BaseComponentProps {
  type?: string;
  level?: "xs" | "sm" | "base" | "lead";
  color: "grey" | "grey-anthracite" | "indigo" | "white";
}
const Copy: React.FC<CopyProps> = (props) => {
  const { className, level, type, color, children } = props;
  const Element = type ?? ("p" as React.ElementType);
  const CopyLevel = level ?? "base";

  return (
    <Element
      className={`${CopyLevel === "xs" ? "font-sans font-normal text-xs" : ""} \
       ${
         CopyLevel === "sm"
           ? "font-sans font-normal text-sm lg:text-sm-desktop"
           : ""
       } \
       ${
         CopyLevel === "base"
           ? "font-sans font-medium text-base lg:text-base-desktop"
           : ""
       } \
       ${
         CopyLevel === "lead"
           ? "font-sans font-medium text-lg lg:text-lg-desktop"
           : ""
       } 
        ${color === "grey" ? "text-grey-900" : ""}
        ${color === "grey-anthracite" ? "text-grey-700" : ""}
        ${color === "indigo" ? "text-indigo-700" : ""}
        ${color === "white" ? "text-white" : ""}
        ${className ?? ""}`}
    >
      {children}
    </Element>
  );
};

export default Copy;
