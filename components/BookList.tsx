import React from "react";
import classNames from "classnames";

// Components
import BookCard from "./BookCard";
import Pagination from "./Pagination";

// Styles
import styles from "../styles/BookList.module.css";

// Types
import { Book } from "../libs/book";

type BookListProps = {
  oneCol: boolean;
  maxBooks: number;
  books: Book[];
  loading: boolean;
};

function BookList({ oneCol, maxBooks, books, loading }: BookListProps) {
  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <div
      className={classNames(styles.BookList, {
        [styles.BookListFull]: oneCol,
      })}
    >
      <div
        className={classNames(styles.list, {
          [styles.oneColList]: oneCol,
        })}
      >
        {books.slice(0, maxBooks).map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
