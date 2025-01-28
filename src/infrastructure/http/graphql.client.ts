import {ApolloClient, gql, InMemoryCache, NormalizedCacheObject} from "@apollo/client";
import {injectable} from "inversify";
import {GraphQLClientInterface} from "@/domain/interfaces/graphql-client.interface";
import {strapiURL} from "@/config/constant";

@injectable()
export class GraphQLClient implements GraphQLClientInterface {
    private client: ApolloClient<NormalizedCacheObject>;

    constructor() {
        this.client = new ApolloClient({
            uri: strapiURL + "/graphql",
            cache: new InMemoryCache(),
        });
    }

    async query<T>(query: string, variables?: Record<string, never>): Promise<T> {
        const result = await this.client.query({
            query: gql(query),
            variables,
        });
        return result.data as T;
    }

    async mutate<T>(mutation: string, variables?: Record<string, never>): Promise<T> {
        const result = await this.client.mutate({
            mutation: gql(mutation),
            variables,
        });
        return result.data as T;
    }
}