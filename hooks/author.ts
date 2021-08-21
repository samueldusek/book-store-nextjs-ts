// Types
import { Author } from "../libs/author";

import { useQuery } from "@apollo/client";
import { GET_ALL_AUTHORS, GET_AUTHOR } from "../queries/author";

export function useGetAuthors(page: number) {
  const { loading, error, data } = useQuery(GET_ALL_AUTHORS, {
    variables: { page },
  });

  let authors: Author[] = [];

  if (data) {
    console.log(data.authors);
    authors = data.authors.map((author: any) => ({
      id: author.id,
      name: author.name,
    }));
  }

  return { loading, error, authors };
}

export function useGetAuthor(id: string | string[] | undefined) {
  const { loading, error, data } = useQuery(GET_AUTHOR, { variables: { id } });

  let author: Author = {
    id: 0,
    name: "Author",
  };

  if (data) {
    console.log(data.author);
    author = {
      id: data.author.id,
      name: data.author.name,
      birthplace: data.author.birthplace,
      dateOfBirth: data.author.date_of_birth,
      dateOfDeath: data.author.date_of_death,
    };
    if (data.author.books.length > 0) {
      author.books = data.author.books.map((book: any) => {
        return {
          id: book.id,
          title: book.title,
          isbn: book.isbn,
          datePublished: book.date_published,
          author: {
            id: data.author.id,
            name: data.author.name,
          },
        };
      });
    }
  }

  return { loading, error, author };
}
