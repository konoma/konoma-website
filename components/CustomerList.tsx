import React from "react";
import { BaseComponentProps } from "../helper/classNames";
import Heading from "@components/Text/Heading";
import ContentImg from "@components/ContentImg";

interface CustomerListProps extends BaseComponentProps {
  title: string;
  topCustomer?: {
    name: string;
    imgUrl: string;
  };
  customer?: {
    name: string;
    imgUrl: string;
  };
}

const CustomerList: React.FC<CustomerListProps> = (props) => {
  const { className, title, topCustomer, customer } = props;

  return (
    <section
      className={`container mx-auto px-2 lg:px-3 mt-6 lg:mt-10 2xl:mt-15 \
                lg:grid lg:grid-cols-4 lg:gap-3
                ${className ?? ""}`}
    >
      <Heading
        level="2"
        color="indigo"
        fontSerif
        className={`lg:col-span-4 xl:col-span-2`}
      >
        {title}
      </Heading>

      {/* todo: loop of topcustomer */}
      <div
        className={`sm:col-span-3 \
                  grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2 md:mt-5`}
      >
        <ContentImg
          ratio="2/1"
          fill="contain"
          imgUrl="/images/logo-aeropers.png"
          imgAlt="Aeropers Logo"
        />
        <ContentImg
          ratio="2/1"
          fill="contain"
          imgUrl="/images/logo-aeropers.png"
          imgAlt="Aeropers Logo"
        />
        <ContentImg
          ratio="2/1"
          fill="contain"
          imgUrl="/images/logo-aeropers.png"
          imgAlt="Aeropers Logo"
        />
        <ContentImg
          ratio="2/1"
          fill="contain"
          imgUrl="/images/logo-aeropers.png"
          imgAlt="Aeropers Logo"
        />
        <ContentImg
          ratio="2/1"
          fill="contain"
          imgUrl="/images/logo-aeropers.png"
          imgAlt="Aeropers Logo"
        />
      </div>

      {/* todo: loop of customer */}
      <div
        className={`md:col-span-3 \
                  grid grid-cols-3 sm:grid-cols-6 gap-3 mt-5 md:mt-8`}
      >
        <ContentImg
          ratio="2/1"
          fill="contain"
          imgUrl="/images/logo-aeropers.png"
          imgAlt="Aeropers Logo"
        />
        <ContentImg
          ratio="2/1"
          fill="contain"
          imgUrl="/images/logo-aeropers.png"
          imgAlt="Aeropers Logo"
        />
        <ContentImg
          ratio="2/1"
          fill="contain"
          imgUrl="/images/logo-aeropers.png"
          imgAlt="Aeropers Logo"
        />
        <ContentImg
          ratio="2/1"
          fill="contain"
          imgUrl="/images/logo-aeropers.png"
          imgAlt="Aeropers Logo"
        />
        <ContentImg
          ratio="2/1"
          fill="contain"
          imgUrl="/images/logo-aeropers.png"
          imgAlt="Aeropers Logo"
        />
        <ContentImg
          ratio="2/1"
          fill="contain"
          imgUrl="/images/logo-aeropers.png"
          imgAlt="Aeropers Logo"
        />
        <ContentImg
          ratio="2/1"
          fill="contain"
          imgUrl="/images/logo-aeropers.png"
          imgAlt="Aeropers Logo"
        />
        <ContentImg
          ratio="2/1"
          fill="contain"
          imgUrl="/images/logo-aeropers.png"
          imgAlt="Aeropers Logo"
        />
        <ContentImg
          ratio="2/1"
          fill="contain"
          imgUrl="/images/logo-aeropers.png"
          imgAlt="Aeropers Logo"
        />
      </div>
    </section>
  );
};

export default CustomerList;
