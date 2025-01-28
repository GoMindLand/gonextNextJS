import React from "react";
import {Carte} from "@/application/dto/home-page.dto";
import ReactMarkdown from "react-markdown";

interface MainCardProps {
    carte: Carte;
}

const MainCard: React.FC<MainCardProps> = ({ carte }) => {
    console.log(carte);
    return (
        <div className="p-4">
            <div className="card mt-5 p-2" style={{ background: carte.couleur }}>
                <div className="card-body p-4">
                    <div className="markdown-container markdown">
                        <ReactMarkdown
                            components={{
                                strong: ({ children }) => <strong style={{ color: carte.strong}}>{children}</strong>,
                                h1: ({ children }) => <h1 style={{ fontWeight: "bold"}}>{children}</h1>,
                                h2: ({ children }) => <h2 style={{ fontWeight: "bold"}}>{children}</h2>,
                                h3: ({ children }) => <h3 style={{ fontWeight: "bold"}}>{children}</h3>,
                                h4: ({ children }) => <h4 style={{ fontWeight: "bold"}}>{children}</h4>,
                                h5: ({ children }) => <h5 style={{ fontWeight: "bold"}}>{children}</h5>,
                                h6: ({ children }) => <h6 style={{ fontWeight: "bold"}}>{children}</h6>,
                            }}
                        >{carte.Titre}</ReactMarkdown>
                    </div>
                    <div className="markdown-container markdown">
                        <ReactMarkdown
                            components={{
                                strong: ({ children }) => <strong style={{ color: carte.strong}}>{children}</strong>,
                                h1: ({ children }) => <h1 style={{ fontWeight: "bold"}}>{children}</h1>,
                                h2: ({ children }) => <h2 style={{ fontWeight: "bold"}}>{children}</h2>,
                                h3: ({ children }) => <h3 style={{ fontWeight: "bold"}}>{children}</h3>,
                                h4: ({ children }) => <h4 style={{ fontWeight: "bold"}}>{children}</h4>,
                                h5: ({ children }) => <h5 style={{ fontWeight: "bold"}}>{children}</h5>,
                                h6: ({ children }) => <h6 style={{ fontWeight: "bold"}}>{children}</h6>,
                            }}
                        >{carte.Contenue}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainCard;