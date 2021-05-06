import React from "react";
import { BaseComponentProps } from "../helper/classNames";
import { IconServiceStrategicConsulting } from "@components/icons";

interface ListServicesProps extends BaseComponentProps {}

const ListServices: React.FC<ListServicesProps> = (props) => {
  const { className } = props;

  return (
    <ul
      className={`flex flex-col flex-nowrap gap-2
                ${className ?? ""}`}
    >
      <li className={`flex flex-nowrap gap-2 md:gap-3 items-center`}>
        <span className={`flex-initial w-6 md:w-7 h-6 md:h-7`}>
          <IconServiceStrategicConsulting />
        </span>
        <span
          className={`flex-auto \
                    font-medium text-base md:text-base-desktop text-gray-900 leading-tight`}
        >
          Strategische Beratung mit Design Thinking
        </span>
      </li>
    </ul>
  );
};

export default ListServices;
