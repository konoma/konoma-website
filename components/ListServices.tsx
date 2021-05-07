import React from "react";
import { BaseComponentProps } from "../helper/classNames";
import ListIcon from "@components/ListIcon";
import {
  IconServiceCustomerInteraction,
  IconServiceDevelopment,
  IconServiceStrategicConsulting,
  IconServiceUserExperience,
  IconServiceUserInterface,
} from "@components/icons";

interface ListServicesProps extends BaseComponentProps {}

const ListServices: React.FC<ListServicesProps> = (props) => {
  const { className } = props;

  return (
    <ul
      className={`flex flex-col flex-nowrap gap-2 mt-4 md:mt-5
                ${className ?? ""}`}
    >
      <ListIcon
        text={"Strategische Beratung mit Design Thinking"}
        icon={<IconServiceStrategicConsulting />}
      />
      <ListIcon
        text={"Gestaltung von Kundeninteraktionen"}
        icon={<IconServiceCustomerInteraction />}
      />
      <ListIcon
        text={"User Experience- und Interaction-Design"}
        icon={<IconServiceUserExperience />}
      />
      <ListIcon
        text={
          "Gestaltung von digitalen Benutzeroberflächen mit hoher Bedienbarkeit"
        }
        icon={<IconServiceUserInterface />}
      />
      <ListIcon
        text={"Entwicklung von Software für Web und Mobile"}
        icon={<IconServiceDevelopment />}
      />
    </ul>
  );
};

export default ListServices;
