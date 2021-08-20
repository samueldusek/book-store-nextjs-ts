// Types
import { Book } from "../libs/book";

import { useQuery } from "@apollo/client";
import { GET_ALL_BOOKS, GET_BOOK } from "../queries/book";

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

export function useGetBook(id: string | string[] | undefined) {
  const { loading, error, data } = useQuery(GET_BOOK, { variables: { id } });

  let book: Book = {
    id: 0,
    title: "New book",
    isbn: 0,
    datePublished: "Date",
    author: {
      id: 0,
      name: "Author",
    },
  };

  if (data) {
    console.log(data.book);

    book = {
      id: data.book.id,
      title: data.book.title,
      isbn: data.book.isbn,
      datePublished: data.book.date_published,
      author: {
        id: data.book.author.id,
        name: data.book.author.name,
      },
    };
  }

  return { loading, error, book };
}
