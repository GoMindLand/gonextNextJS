import React, {CSSProperties, useEffect} from "react";
import JobSection from "@/presentation/pages/home/component/jobSection";
import getHomePage from "@/presentation/hooks/home/homePage.hook";
import {Carte, Description, HomePageDto, ImageElement} from "@/application/dto/home-page.dto";
import {strapiURL} from "@/config/constant";
import MainCard from "@/presentation/pages/home/component/mainCard";
import MainImage from "@/presentation/pages/home/component/mainImage";
import MainDescription from "@/presentation/pages/home/component/mainDescription";

const HomePage: React.FC = () => {

    const [homePage, setHomePage] = React.useState<HomePageDto | null>(null);
    useEffect(() => {

        const fetchData: () => Promise<void> =  async () => {
            console.log("fetching homePage...");
            const result: HomePageDto = await getHomePage();

            setHomePage(result);
            console.log(result.homePage);
        };

        fetchData();
    }, []);

    return (
        <>
            <div style={{marginTop: "4rem"}}>
                {homePage?.homePage.element.map((element, indexElement) => {
                    let cssInfo: CSSProperties = {};
                    if (element.BackgroundImage) {

                        cssInfo = {
                            backgroundImage: `url(${strapiURL + element.BackgroundImage.url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            alignItems: "center",
                        }
                    }
                    else if (element.couleur) {
                        cssInfo = {
                            backgroundColor: element.couleur,
                            alignItems: "center",
                        };
                    }
                    return (<section key={indexElement} className={indexElement === 0 ? "mt-5" : ""}>
                        <div style={cssInfo}>
                            {element.row.map((uniqueRow, indexRow) => {
                                return (<div className={"container text-" + uniqueRow.TextPosition} key={indexRow}>
                                        <div className={"row " + "pt-" + uniqueRow.PaddingTop + " " + "pb-" + uniqueRow.PaddingBottom } key={indexRow}>
                                            {uniqueRow.Column.map((uniqueColumn, indexColumn) => {
                                                return (<div className={"col-lg-" + uniqueColumn.sizeDesktop + " col-sm-" + uniqueColumn.sizeMobile } key={indexColumn}>
                                                    {uniqueColumn.Cartes.map((carte: Carte, indexCarte) => {
                                                        return (
                                                            <MainCard carte={carte} key={indexCarte}/>
                                                        );
                                                    })}
                                                    {uniqueColumn.Images.map((image: ImageElement, indexImage) => {
                                                        return (<MainImage image={image} key={indexImage}/>);
                                                    })}
                                                    {uniqueColumn.Description.map((description: Description, indexDescription) => {
                                                        return (
                                                            <MainDescription key={indexDescription} description={description} />
                                                        );
                                                    })}
                                                    {uniqueColumn.Bouton.map((bouton, indexBouton) => {
                                                        return (
                                                            <div key={indexBouton} className="text-center" >
                                                                <button className="btn btn-outline-light me-3" style={{borderColor: "#FFEB3B", color: "#FFEB3B"}}>{bouton.Titre}</button>
                                                            </div>
                                                        );
                                                    })}
                                                </div>)
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </section>)
                })}
            </div>
            <section>
                <JobSection />
            </section>
        </>);
}

export default HomePage;