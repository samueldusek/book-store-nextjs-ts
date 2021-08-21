export const bookCovers: string[] = [
  "/images/books/books1.png",
  "/images/books/books2.png",
  "/images/books/books3.png",
  "/images/books/books4.png",
  "/images/books/books5.png",
  "/images/books/books6.png",
  "/images/books/books7.png",
  "/images/books/books8.png",
  "/images/books/books9.png",
  "/images/books/books10.png",
];

export type Book = {
  id: number;
  title: string;
  isbn: number;
  datePublished: string;
  author: {
    id: number;
    name: string;
  };
  chapters?: {
    id?: number;
    title?: string;
  }[];
};
