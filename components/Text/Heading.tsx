import React from "react";
import { BaseComponentProps } from "../../helper/classNames";

interface HeadingProps extends BaseComponentProps {
  type?: string;
  level: "hero" | "1" | "2" | "3" | "4";
  fontSerif?: boolean;
  colorBlue?: boolean;
}
const Heading: React.FC<HeadingProps> = (props) => {
  const { className, level, type, children, fontSerif, colorBlue } = props;
  const Element = type ?? ("span" as React.ElementType);

  return (
    <Element
      className={`${level === "hero" ? "text-5xl lg:text-5xl-desktop" : ""}
                ${level === "1" ? "text-4xl lg:text-4xl-desktop" : ""}
                ${level === "2" ? "text-3xl lg:text-3xl-desktop" : ""}
                ${level === "3" ? " text-2xl lg:text-2xl-desktop" : ""}
                ${level === "4" ? "text-xl lg:text-xl-desktop" : ""}
                ${
                  fontSerif === true
                    ? "font-serif font-bold"
                    : "font-sans font-semibold"
                }
                ${colorBlue === true ? "text-indigo-700" : "text-gray-900"}
                ${className ?? ""}`}
    >
      {children}
    </Element>
  );
};

export default Heading;
