import React from "react";

// Components
import BookCard from "./BookCard";

// Styles
import styles from "../styles/BookList.module.css";

// Types
import { Book } from "../libs/book";

function BookList() {
  const ids: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const books: Book[] = ids.map((idx) => ({
    id: idx,
    title: "Harry Potter",
    isbn: 123123,
    datePublished: "January 1, 2020",
  }));
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
