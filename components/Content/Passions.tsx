import {
  IconServiceCustomerInteraction,
  IconServiceDevelopment,
  IconServiceStrategicConsulting,
  IconServiceUserExperience,
  IconServiceUserInterface,
} from '@components/icons';
import ContentRow from '@components/Layout/ContentRow';
import SubTitle from '@components/Text/SubTitle';
import React from 'react';
import { PassionType } from '../../@types';
import { PassionIconCodeEnum } from '../../@types/enum';
import { BaseComponentProps } from '../../helper/classNames';

interface PassionProps extends BaseComponentProps {
  title: string;
  passions: PassionType[];
}

const Passions: React.FC<PassionProps> = (props) => {
  const { title, passions, className = '' } = props;

  return (
    <ContentRow className={className}>
      <SubTitle>{title}</SubTitle>

      <ul>
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
    </ContentRow>
  );
};

export default Passions;
