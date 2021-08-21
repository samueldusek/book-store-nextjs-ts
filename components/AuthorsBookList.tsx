import React from "react";

// Components
import BookList from "./BookList";

// Styles
import styles from "../styles/AuthorsBookList.module.css";

// Types
import { Book } from "../libs/book";

type AuthorsBookListProps = {
  books?: Book[];
  author: string;
};

function AuthorsBookList({ books = [], author }: AuthorsBookListProps) {
  return (
    <section className={styles.AuthorsBookList}>
      <h2>{author}'s books</h2>
      {books.length !== 0 ? (
        <BookList
          books={books}
          oneCol={true}
          loading={false}
          maxBooks={books.length}
        />
      ) : (
        <p className={styles.warning}>
          We do not have any books from <strong>{author}</strong>. <br />
          But our team is working on it!
        </p>
      )}
    </section>
  );
}

export default AuthorsBookList;
