// Types
import { Author } from "../libs/author";

import { useQuery } from "@apollo/client";
import { GET_ALL_AUTHORS } from "../queries/author";

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
