import React from "react";
import {BaseComponentProps} from "../../helper/classNames";

interface ContentImgProps extends BaseComponentProps {
    imgOrientation: "left" | "right";
    image: React.ReactNode;
}

const ContentImgText: React.FC<ContentImgProps> = (props) => {
    const { className, imgOrientation, image, children } = props;

    return (
        <section className={`container mx-auto px-2 lg:px-3 mt-6 lg:mt-10 2xl:mt-15 space-y-3 lg:space-y-0 \ 
                            lg:grid lg:grid-cols-8 lg:grid-rows-1 lg:auto-rows-min lg:gap-3 \
                            ${className}`}>
            <div className={`space-y-2 lg:row-start-1 lg:row-end-2 lg:self-center \
                            ${imgOrientation === "left" ? "lg:col-start-6 lg:col-end-9" : "lg:col-start-1 lg:col-end-4"}`}>
                {children}
            </div>
            <div className={`lg:row-start-1 lg:row-end-2
                            ${imgOrientation === "left" ? "lg:col-start-1 lg:col-end-5" : "lg:col-start-5 lg:col-end-9"}`}>
                {image}
            </div>
        </section>
    )
}

export default ContentImgText;