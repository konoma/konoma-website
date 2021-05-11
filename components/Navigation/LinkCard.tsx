import React from "react";
import Link from "next/link";
import {BaseComponentProps} from "../../helper/classNames";
import Heading from "@components/Text/Heading";
import {IconArrow} from "@components/icons";

interface LinkCardProps extends BaseComponentProps {}

const LinkCard:React.FC<LinkCardProps> = (props) => {
    const { className } = props;

    return (
        <Link href={"#"} passHref>
            <a>
                <Heading level="4" type="h6">Label</Heading>
                <Heading level="3" type="h5">Project Description</Heading>
                <IconArrow />
            </a>
        </Link>
    )
}

export default LinkCard;