import React from "react";

// Components
import BookCard from "./BookCard";

// Styles
import styles from "../styles/BookList.module.css";

// Hooks
import { useGetBooks } from "../hooks/book";

// Types
type BookListProps = {
  page: number;
};

function BookList({ page }: BookListProps) {
  const { loading, error, books } = useGetBooks(page);

  if (loading) {
    return <div>Loading..</div>;
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
