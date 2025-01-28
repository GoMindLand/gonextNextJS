export interface HomePageDto {
    homePage: HomePage;
}

export interface HomePage {
    createdAt:   Date;
    documentId:  string;
    publishedAt: Date;
    updatedAt:   Date;
    element:     Element[];
}

export interface Element {
    id:              string;
    couleur:         string;
    row:             Row[];
    BackgroundImage: Image | null;
}

export interface Image {
    documentId:        string;
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats | null;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
    publishedAt:       Date;
}

export interface Formats {
    thumbnail: Medium;
    medium:    Medium;
    small:     Medium;
}

export interface Medium {
    name:        string;
    hash:        string;
    ext:         string;
    mime:        string;
    path:        null;
    width:       number;
    height:      number;
    size:        number;
    sizeInBytes: number;
    url:         string;
}

export interface Row {
    name:   string;
    id:     string;
    Column: Column[];
}

export interface Column {
    Cartes:      Carte[];
    Description: Description[];
    Images:      ImageElement[];
    Bouton:      Bouton[];
    id:          string;
    name:        string;
    sizeDesktop:       number;
    sizeMobile:        number;
}

export interface Carte {
    Contenue: null;
    Titre:    string;
    couleur:  string;
    id:       string;
    strong: string;
}

export interface Description {
    Contenue: null | string;
    id:       string;
    strong: string;
}

export interface ImageElement {
    Image: Image;
    id:    string;
}

export interface Bouton {
    id:    string;
    Link:  string;
    Titre: string;
}