import React, {CSSProperties, useEffect} from "react";
import JobSection from "@/presentation/pages/home/component/jobSection";
import getHomePage from "@/presentation/hooks/home/homePage.hook";
import {HomePageDto} from "@/application/dto/home-page.dto";
import {strapiURL} from "@/config/constant";

const HomePage: React.FC = () => {

    const [homePage, setHomePage] = React.useState<HomePageDto | null>(null);

    console.log("couch");
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
            <div>
                {homePage?.homePage.element.map((element, index) => {
                    console.log(element.couleur);
                    console.log(element.BackgroundImage);
                    let cssInfo: CSSProperties = {};
                    if (element.BackgroundImage) {

                        cssInfo = {
                            backgroundImage: `url(${strapiURL + element.BackgroundImage.url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            alignItems: "center",
                            height: "100vh"
                        }
                    }
                    else if (element.couleur) {
                        cssInfo = {
                            backgroundColor: element.couleur,
                            alignItems: "center",
                            height: "100vh"
                        };
                    }
                    return (<section key={index}>
                        <div style={cssInfo}>
                            {element.row.map((uniqueRow, index) => {
                                return (
<div className="container" key={index}>
    <div className="row" key={index}>
        omg uwu
    </div>
</div>
                                )
                            })}
                        </div>
                    </section>)
                })}
            </div>
            <section>
                <div className="hero-section">
                    <div className="container text-center text-lg-start">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1>AGIR AVEC <br/> L&#39;ESPRIT ÉVEILLÉ</h1>
                                <p className="mt-3">
                                    Grâce au GreenIT, nous développons des applications avec plus de
                                    sens et de qualité technique.
                                </p>
                                <div className="mt-4">
                                    <button className="btn btn-outline-light me-3">
                                        Prendre rendez-vous
                                    </button>
                                    <a href="#jobboard" className="btn btn-link">
                                        Job Board →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-dark text-white py-5">
                    <div className="container">
                        {/* Section Mission */}
                        <div className="text-center mb-5">
                            <h2 className="fw-bold">
                                <span style={{color: "#7EE0BE"}}>Notre mission technique.</span> Optimiser vos
                                performances.
                            </h2>
                            <p className="mt-3">
                                Nous accompagnons les CTO, Tech Leads et responsables IT à créer des applications en
                                optimisant les ressources techniques, humaines et environnementales.
                            </p>
                            <button className="btn btn-outline-light mt-4"
                                    style={{borderColor: "#FFEB3B", color: "#FFEB3B"}}>
                                PRENDRE RENDEZ-VOUS
                            </button>
                        </div>

                        {/* Section Défis */}
                        <div>
                            <h3 className="fw-bold text-center">
                                <span style={{color: "#7EE0BE"}}>Les défis</span> de notre industrie
                            </h3>
                            <div className="row mt-4">
                                {/* Défi 1 */}
                                <div className="col-md-4">
                                    <div className="p-4 rounded bg-primary text-white">
                                        <h5>Temps de chargement des applications élevé</h5>
                                        <p>
                                            40 % des utilisateurs abandonnent après 3 secondes. (source Google web
                                            performance Report - 2018).
                                        </p>
                                    </div>
                                </div>
                                {/* Défi 2 */}
                                <div className="col-md-4">
                                    <div className="p-4 rounded bg-primary text-white">
                                        <h5>Dette technique et coûts de maintenance élevés</h5>
                                        <p>
                                            50 % du budget IT est dédié à la maintenance. (CIO Insights Report by
                                            Deloitte –
                                            2021).
                                        </p>
                                    </div>
                                </div>
                                {/* Défi 3 */}
                                <div className="col-md-4">
                                    <div className="p-4 rounded bg-primary text-white">
                                        <h5>Problèmes de conformité légale</h5>
                                        <p>
                                            Sanctions de niveau 1 pouvant atteindre 50 000 € par applications{" "}
                                            <a href="https://www.numerique.gouv.fr/" className="text-light">
                                                (Numérique.gouv.fr)
                                            </a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <JobSection />
            </section>
        </>);
}

export default HomePage;