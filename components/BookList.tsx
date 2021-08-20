import React from "react";
import classNames from "classnames";

// Components
import BookCard from "./BookCard";

// Styles
import styles from "../styles/BookList.module.css";

// Hooks
import { useGetBooks } from "../hooks/book";

// Types
type BookListProps = {
  page: number;
  oneCol: boolean;
  maxBooks: number;
};

function BookList({ page, oneCol, maxBooks }: BookListProps) {
  const { loading, error, books } = useGetBooks(page);

  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <section
      className={classNames(styles.BookList, {
        [styles.BookListFull]: oneCol,
      })}
    >
      <h2>Book List</h2>
      <div
        className={classNames(styles.list, {
          [styles.oneColList]: oneCol,
        })}
      >
        {books.slice(0, maxBooks).map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
    </section>
  );
}

export default BookList;
