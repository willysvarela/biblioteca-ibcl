import { BookGQL } from "./interfaces";

export const bookGQLToBook = (bookGQL: BookGQL) => {
    return {
        id: bookGQL.id,
        title: bookGQL.attributes.titulo,
        description: bookGQL.attributes.descricao,
        imageUrl: bookGQL.attributes.capa_url,
    };
};
