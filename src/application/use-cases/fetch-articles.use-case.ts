import {inject, injectable} from "inversify";
import type {GraphQLClientInterface} from "@/domain/interfaces/graphql-client.interface";
import {ArticlesResponseDto} from "@/application/dto/articles-response.dto";


@injectable()
export class FetchArticlesUseCase {

    constructor(@inject("GraphQLClientInterface") private graphqlClient: GraphQLClientInterface) {
    }
    async execute(): Promise<ArticlesResponseDto> {
        console.log('fetching articles...');
        return this
            .graphqlClient
            .query<ArticlesResponseDto>(`
                        query Articles {
              articleBlogs {
                documentId
                Auteur
                Titre
                article
                createdAt
                publishedAt
                updatedAt
              }
            }`);
    }
}