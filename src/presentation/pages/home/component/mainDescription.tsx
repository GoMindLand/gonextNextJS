import ReactMarkdown from "react-markdown";
import React from "react";
import {Description} from "@/application/dto/home-page.dto";

interface MainDescriptionPro {
    description: Description;
}

const MainDescription: React.FC<MainDescriptionPro> = ({ description }) => {
    return (
<div className={"pt-5"}>
    <ReactMarkdown
        components={{
            strong: ({ children }) => <strong style={{ color: description.strong, fontWeight: "bolder"}}>{children}</strong>,
            h1: ({ children }) => <h1 style={{ fontWeight: "bold", marginBottom: "0px"}}>{children}</h1>,
            h2: ({ children }) => <h2 style={{ fontWeight: "bold"}}>{children}</h2>,
            h3: ({ children }) => <h3 style={{ fontWeight: "bold"}}>{children}</h3>,
            h4: ({ children }) => <h4 style={{ fontWeight: "bold"}}>{children}</h4>,
            h5: ({ children }) => <h5 style={{ fontWeight: "bold"}}>{children}</h5>,
            h6: ({ children }) => <h6 style={{ fontWeight: "bold"}}>{children}</h6>,
        }}
    >{description.Contenue}</ReactMarkdown>
</div>
    );
};

export default MainDescription;