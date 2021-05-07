import React from "react";
import { BaseComponentProps } from "../../helper/classNames";

interface HeadingProps extends BaseComponentProps {
  type?: string;
  level: "hero" | "1" | "2" | "3" | "4";
}
const Heading: React.FC<HeadingProps> = (props) => {
  const { className, level, type, children } = props;
  const Element = type ?? ("span" as React.ElementType);

  return (
    <Element
      className={`${
        level === "hero"
          ? "font-sans font-semibold text-5xl lg:text-5xl-desktop text-gray-900"
          : ""
      } \
       ${
         level === "1"
           ? "font-sans font-semibold text-4xl lg:text-4xl-desktop text-gray-900"
           : ""
       } \
       ${
         level === "2"
           ? "font-serif font-bold text-3xl lg:text-3xl-desktop text-gray-900"
           : ""
       } \
       ${
         level === "3"
           ? "font-sans font-semibold text-2xl lg:text-2xl-desktop text-gray-900"
           : ""
       } \
       ${
         level === "4"
           ? "font-sans font-semibold text-xl lg:text-xl-desktop text-gray-900"
           : ""
       } \
       ${className ?? ""}`}
    >
      {children}
    </Element>
  );
};

export default Heading;
