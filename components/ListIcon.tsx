import React from "react";
import { BaseComponentProps } from "../helper/classNames";

interface ListIconProps extends BaseComponentProps {
  text: string;
  icon: React.ReactNode;
}

const ListIcon: React.FC<ListIconProps> = (props) => {
  const { className, text, icon } = props;

  return (
    <li
      className={`flex flex-nowrap gap-1 md:gap-3 items-center
                        ${className ?? ""}`}
    >
      <span className={`flex-none w-5 md:w-7 h-5 md:h-7`}>{icon}</span>
      <span
        className={`flex-auto \
                    font-medium text-base md:text-base-desktop text-gray-900 leading-tight`}
      >
        {text}
      </span>
    </li>
  );
};

export default ListIcon;
