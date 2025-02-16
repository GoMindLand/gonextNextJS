import {inject, injectable} from "inversify";
import type {GraphQLClientInterface} from "@/domain/interfaces/graphql-client.interface";
import {HomePageDto} from "@/application/dto/home-page.dto";


@injectable()
export class FetchHomePageUseCase {

    constructor(@inject("GraphQLClientInterface") private graphqlClient: GraphQLClientInterface) {
    }
    async execute(): Promise<HomePageDto> {
        console.log('fetching homepage...');
        return this
            .graphqlClient
            .query<HomePageDto>(`
                        query Query {
  homePage {
    createdAt
    documentId
    publishedAt
    updatedAt
    element {
      ... on ComponentStructureSection {
        id
        couleur
        Hauteur
        row {
          name
          id
          TextPosition
          PaddingTop
          PaddingBottom
          Column {
            Bouton {
              id
              Link
              Titre
            }
            Cartes {
              Contenue
              Titre
              couleur
              id
              strong
            }
            Description {
              Contenue
              id
              strong
            }
            Images {
              Size
              Image {
                documentId
                name
                alternativeText
                caption
                width
                height
                formats
                hash
                ext
                mime
                size
                url
                previewUrl
                provider
                provider_metadata
                createdAt
                updatedAt
                publishedAt
              }
              id
            }
            id
            name
            sizeDesktop
            SizeMobile
          }
        }
        BackgroundImage {
          documentId
          name
          alternativeText
          caption
          width
          height
          formats
          hash
          ext
          mime
          size
          url
          previewUrl
          provider
          provider_metadata
          createdAt
          updatedAt
          publishedAt
        }
      }
      ... on Error {
        code
        message
      }
    }
  }
}`);
    }
}