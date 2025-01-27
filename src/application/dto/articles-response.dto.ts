export interface Article {
    documentId: string;
    Auteur: string;
    Titre: string;
    article: string;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
}

export interface ArticlesResponseDto {
        articleBlogs: Article[];
}
