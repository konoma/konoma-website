import React from "react";
import { BaseComponentProps } from "../helper/classNames";
import Copy from "@components/Text/Copy";
import ContentImg from "@components/ContentImg";

interface PersonCardProps extends BaseComponentProps {
  name: string;
  role: string;
  img: {
    imgUrl: string;
    imgAlt: string;
  };
}

const PersonCad: React.FC<PersonCardProps> = (props) => {
  const { className, name, role, img } = props;

  return (
    <div
      className={`rounded overflow-hidden
                ${className ?? ""}`}
    >
      <ContentImg
        ratio="1/1"
        fill="cover"
        imgUrl={img.imgUrl}
        imgAlt={img.imgAlt}
        className={`rounded overflow-hidden`}
      />
      <div className={`p-2 lg:p-3 lg:pt-4 space-y-1 lg:space-y-1.5`}>
        <Copy color="grey">{name}</Copy>
        <Copy color="grey-anthracite" level="sm">
          {role}
        </Copy>
      </div>
    </div>
  );
};

export default PersonCad;
