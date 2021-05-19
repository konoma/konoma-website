import React from "react";
import { BaseComponentProps } from "../helper/classNames";
import Heading from "@components/Text/Heading";

interface ProjectTeaserProps extends BaseComponentProps {
  title: string;
  children: React.ReactNode;
}

const ProjectTeaser: React.FC<ProjectTeaserProps> = (props) => {
  const { className, title, children } = props;

  return (
    <section
      className={`container mx-auto px-2 lg:px-3 mt-6 lg:mt-10 2xl:mt-15 space-y-3 lg:space-y-4
                ${className ?? ""}`}
    >
      <Heading level="4" type="h4">
        {title}
      </Heading>
      <div
        className={`space-y-3 xl:space-y-0 \
                  xl:grid xl:grid-cols-2 lg:gap-3`}
      >
        {children}
      </div>
    </section>
  );
};

export default ProjectTeaser;
