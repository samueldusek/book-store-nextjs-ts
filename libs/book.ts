export type Book = {
  id: number;
  title: string;
  isbn: number;
  datePublished: string;
  author: {
    id: number;
    name: string;
  };
};
