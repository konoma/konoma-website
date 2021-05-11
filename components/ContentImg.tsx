import React from "react";
import Image from "next/image";
import {BaseComponentProps} from "../helper/classNames";

interface ContentImgProps extends BaseComponentProps {
    imgUrl: string;
    imgAlt?: string;
    ratio: "4/3" | "2/1" | "1/1";
    fill: "cover" | "contain";
}

const ContentImg: React.FC<ContentImgProps> = (props) => {
    const { className, imgUrl, imgAlt, ratio, fill } = props;

    return (
        <div className={`${ratio === "4/3" ? "aspect-w-4 aspect-h-3" : ""}
                        ${ratio === "2/1" ? "aspect-w-2 aspect-h-1" : ""}
                        ${ratio === "1/1" ? "aspect-w-1 aspect-h-1" : ""}
                        ${className ?? ""}        
        `}>
            <Image
                src={imgUrl}
                alt={imgAlt}
                layout="fill"
                className={`${fill === "cover" ? "object-cover" : ""}
                            ${fill === "contain" ? "object-contain" : ""}`}
            />
        </div>
    )

}

export default ContentImg;