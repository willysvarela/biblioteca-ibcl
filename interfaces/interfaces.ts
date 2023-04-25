export interface Book {
  id: number;
  title: string;
  description?: string;
  imageUrl?: string;
  autor?: string;
  category?: string;
  editor?: string;
}

export interface BookGQL {
  id: number;
  attributes: {
    titulo : string;
    descricao?: string;
    capa_url?: string;
    autor?: string;
    editor?: string;
  }
}