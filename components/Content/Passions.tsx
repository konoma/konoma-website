import {
  IconServiceCustomerInteraction,
  IconServiceDevelopment,
  IconServiceStrategicConsulting,
  IconServiceUserExperience,
  IconServiceUserInterface,
} from '@components/icons';
import React from 'react';
import { PassionType } from '../../@types';
import { PassionIconCodeEnum } from '../../@types/enum';
import { BaseComponentProps } from '../../helper/classNames';

interface PassionProps extends BaseComponentProps {
  passions: PassionType[];
}

const Passions: React.FC<PassionProps> = (props) => {
  const { passions, className } = props;

  return (
    <ul className={className}>
      {passions.map((passion) => {
        let PassionIcon = null;

        switch (passion.iconCode) {
          case PassionIconCodeEnum.StrategicConsulting:
            PassionIcon = IconServiceStrategicConsulting;
            break;
          case PassionIconCodeEnum.UserExperience:
            PassionIcon = IconServiceUserExperience;
            break;
          case PassionIconCodeEnum.UserInterface:
            PassionIcon = IconServiceUserInterface;
            break;
          case PassionIconCodeEnum.Development:
            PassionIcon = IconServiceDevelopment;
            break;
          case PassionIconCodeEnum.CustomerInteraction:
            PassionIcon = IconServiceCustomerInteraction;
            break;
        }

        return (
          <li key={passion.id} className="flex flex-row items-center mb-4 last:mb-0 text-xl font-medium">
            {PassionIcon !== null && <PassionIcon className="w-14 h-14 mr-4" />}
            <span>{passion.description}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Passions;
