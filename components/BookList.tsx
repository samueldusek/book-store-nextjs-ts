import React from "react";

// Components
import BookCard from "./BookCard";

// Styles
import styles from "../styles/BookList.module.css";

// Types
import { Book } from "../libs/book";

import { useQuery } from "@apollo/client";
import { GET_ALL_BOOKS } from "../queries/book";

function BookList() {
  const page: number = 1;
  const { loading, error, data } = useQuery(GET_ALL_BOOKS, {
    variables: { page },
  });

  let books: Book[] = [];

  if (loading) {
    return <div>Loading..</div>;
  }

  if (data) {
    books = data.books.map((book: any) => ({
      id: book.id,
      title: book.title,
      isbn: book.isbn,
      datePublished: book.date_published,
    }));
  }

  return (
    <section className={styles.BookList}>
      <h2>Book List</h2>
      <div className={styles.list}>
        {books.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
    </section>
  );
}

export default BookList;
