import {FetchArticlesUseCase} from "@/application/use-cases/fetch-articles.use-case";
import container from "@/config/container";
import {Article} from "@/application/dto/articles-response.dto";

const getArticles: () => Promise<Article[]> = async () => {

    const fetchArticlesUseCase = container.get<FetchArticlesUseCase>("FetchArticlesUseCase");
    const articlesInfo = await fetchArticlesUseCase.execute();
    return articlesInfo.articleBlogs;
}

export default getArticles;