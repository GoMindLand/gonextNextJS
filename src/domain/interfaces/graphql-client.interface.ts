export interface GraphQLClientInterface {
    query<T>(query: string, variables?: Record<string, never>): Promise<T>;
    mutate<T>(mutation: string, variables?: Record<string, never>): Promise<T>;
}