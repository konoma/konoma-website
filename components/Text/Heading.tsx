import React from "react";
import { BaseComponentProps } from "../../helper/classNames";

interface HeadingProps extends BaseComponentProps {
  type?: string;
  level: "hero" | "1" | "2" | "3" | "4";
  colorBlue?: boolean;
}
const Heading: React.FC<HeadingProps> = (props) => {
  const { className, level, type, children, colorBlue } = props;
  const Element = type ?? ("span" as React.ElementType);

  return (
    <Element
      className={`${
        level === "hero"
          ? "font-sans font-semibold text-5xl lg:text-5xl-desktop"
          : ""
      } \
       ${
         level === "1"
           ? "font-sans font-semibold text-4xl lg:text-4xl-desktop"
           : ""
       } \
       ${
         level === "2"
           ? "font-serif font-bold text-3xl lg:text-3xl-desktop"
           : ""
       } \
       ${
         level === "3"
           ? "font-sans font-semibold text-2xl lg:text-2xl-desktop"
           : ""
       } \
       ${
         level === "4"
           ? "font-sans font-semibold text-xl lg:text-xl-desktop"
           : ""
       } \
       ${colorBlue === true ? "text-indigo-700" : "text-gray-900"}
       ${className ?? ""}`}
    >
      {children}
    </Element>
  );
};

export default Heading;
