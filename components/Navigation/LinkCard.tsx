import React from "react";
import Link from "next/link";
import { BaseComponentProps } from "../../helper/classNames";
import Heading from "@components/Text/Heading";
import { IconChevron } from "@components/icons";

interface LinkCardProps extends BaseComponentProps {
  label: string;
  title: string;
  to: string;
}

const LinkCard: React.FC<LinkCardProps> = (props) => {
  const { className, label, title, to } = props;

  return (
    <Link href={to} passHref>
      <a
        className={`flex flex-nowrap items-center p-4 lg:p-8 rounded-lg \
                    bg-indigo-100 transition-shadow \
                    group hover:shadow-card focus:outline-none active:bg-indigo-200 active:shadow-none
                    ${className ?? ""}`}
      >
        <span className={`flex-1 space-y-2 lg:space-y-5`}>
          <Heading level="4" type="h4" fontSerif color="indigo">
            {label}
          </Heading>
          <Heading level="2" type="h3" color="gray">
            {title}
          </Heading>
        </span>
        <IconChevron
          className={`flex-none w-2 h-2 lg:w-3 lg:h-3 transition-color`}
        />
      </a>
    </Link>
  );
};

export default LinkCard;
