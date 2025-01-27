import "reflect-metadata";
import {Container} from "inversify";
import {LoginRepository} from "@/infrastructure/repositories/login.repository";
import {GraphQLClient} from "@/infrastructure/http/graphql.client";
import {GraphQLClientInterface} from "@/domain/interfaces/graphql-client.interface";
import {FetchJobsUseCase} from "@/application/use-cases/fecth-jobs.use-case";
import {FetchArticlesUseCase} from "@/application/use-cases/fetch-articles.use-case";
import {FetchHomePageUseCase} from "@/application/use-cases/fetch-home-page.use-case";

const container = new Container();

container.bind<LoginRepository>("LoginRepositoryInterface").to(LoginRepository);
container.bind<FetchJobsUseCase>("FetchJobsUseCase").to(FetchJobsUseCase);
container.bind<FetchArticlesUseCase>("FetchArticlesUseCase").to(FetchArticlesUseCase);
container.bind<FetchHomePageUseCase>("FetchHomePageUseCase").to(FetchHomePageUseCase);

container.bind<GraphQLClientInterface>("GraphQLClientInterface").to(GraphQLClient);
export default container;