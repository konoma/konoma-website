import React from "react";
import Link from "next/link";
import { BaseComponentProps } from "../../helper/classNames";
import Heading from "@components/Text/Heading";
import { IconChevron } from "@components/icons";

interface LinkCardProps extends BaseComponentProps {}

const LinkCard: React.FC<LinkCardProps> = (props) => {
  const { className } = props;

  return (
    <div className="container mx-auto p-3">
      <Link href={"#"} passHref>
        <a
          className={`flex flex-nowrap items-center p-4 lg:p-8 rounded-lg \
                    bg-indigo-100 transition-shadow \
                    group hover:shadow-card focus:outline-none active:bg-indigo-200 active:shadow-none`}
        >
          <span className={`flex-1 space-y-2 lg:space-y-5`}>
            <Heading level="4" type="h6" fontSerif colorBlue>
              Label
            </Heading>
            <Heading level="2" type="h5">
              Title
            </Heading>
          </span>
          <IconChevron
            className={`flex-none w-2 h-2 lg:w-3 lg:h-3 transition-color`}
          />
        </a>
      </Link>
    </div>
  );
};

export default LinkCard;
