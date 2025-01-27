import React, {useEffect} from "react";
import {Article} from "@/application/dto/articles-response.dto";
import getArticles from "@/presentation/hooks/blog/articlesSection.hook";

const Articles: React.FC = () => {
    const [articles, setArticles] = React.useState([] as Article[]);

    useEffect(() => {
        const fetchData: () => Promise<void> = async () => {
            const articlesInfo: Article[] = await getArticles();

            console.log(articlesInfo);
            setArticles(articlesInfo);
        };
        fetchData();
    }, []);

    return <div className="container">
        <div className="row">
            <div className="col-12">
                {articles.map((article: Article, index: number) => (
                    <div className="post-preview" key={index}>
                        <a href="#">
                            <h2 className="post-title">
                                {article.Titre}
                            </h2>
                        </a>
                        <p className="post-meta">
                            Écrit par <a href="#">{article.Auteur}</a> le {article.createdAt}
                        </p>
                        <hr/>
                    </div>
                ))}
            </div>
        </div>
    </div>;
};

export default Articles;