import {inject, injectable} from "inversify";
import type {GraphQLClientInterface} from "@/domain/interfaces/graphql-client.interface";
import {JobsResponseDto} from "@/application/dto/jobs-response.dto";

@injectable()
export class FetchJobsUseCase {
    constructor(@inject("GraphQLClientInterface") private graphqlClient: GraphQLClientInterface) {
    }
    async execute(): Promise<JobsResponseDto> {
        return this
            .graphqlClient
            .query<JobsResponseDto>(`
            query Jobs {
            jobs {
                Title
                JobDescription
                Localisation
                ReadingTime
                tags
            }
        }`);
    }
}