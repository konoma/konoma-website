import React from "react";
import { BaseComponentProps } from "../helper/classNames";
import Copy from "@components/Text/Copy";

interface ListIconProps extends BaseComponentProps {
  icon: React.ReactNode;
}

const ListIcon: React.FC<ListIconProps> = (props) => {
  const { className, icon, children } = props;

  return (
    <li
      className={`flex flex-nowrap gap-1 md:gap-3 items-center
                        ${className ?? ""}`}
    >
      <span className={`flex-none w-5 md:w-7 h-5 md:h-7`}>{icon}</span>
      <Copy type="span" color="grey" className={`flex-auto leading-tight`}>
        {children}
      </Copy>
    </li>
  );
};

export default ListIcon;
