// Types
import { Book } from "../libs/book";

import { useQuery } from "@apollo/client";
import { GET_ALL_BOOKS } from "../queries/book";

export function useGetBooks(page: number) {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS, {
    variables: { page },
  });

  let books: Book[] = [];

  if (data) {
    console.log(data.books);
    books = data.books.map((book: any) => ({
      id: book.id,
      title: book.title,
      isbn: book.isbn,
      datePublished: book.date_published,
      author: {
        id: book.author.id,
        name: book.author.name,
      },
    }));
  }

  return { loading, error, books };
}
