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
      className={`flex flex-col flex-nowrap gap-2
                ${className ?? ""}`}
    >
      <ListIcon icon={<IconServiceStrategicConsulting />}>
        Strategische Beratung mit Design Thinking
      </ListIcon>
      <ListIcon icon={<IconServiceCustomerInteraction />}>
        Gestaltung von Kundeninteraktionen
      </ListIcon>
      <ListIcon icon={<IconServiceUserExperience />}>
        User Experience- und Interaction-Design
      </ListIcon>
      <ListIcon icon={<IconServiceUserInterface />}>
        Gestaltung von digitalen Benutzeroberflächen mit hoher Bedienbarkeit
      </ListIcon>
      <ListIcon icon={<IconServiceDevelopment />}>
        Entwicklung von Software für Web und Mobile
      </ListIcon>
    </ul>
  );
};

export default ListServices;
