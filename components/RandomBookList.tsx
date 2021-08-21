import React, { useState } from "react";

// Functions
import { getRandInt } from "../libs/utils";

// Components
import BookList from "./BookList";

// Styles
import styles from "../styles/RandomBookList.module.css";

// Hooks
import { useGetBooks } from "../hooks/book";

function RandomBookList() {
  const { loading, error, books } = useGetBooks(getRandInt(1, 5));

  return (
    <section className={styles.RandomBookList}>
      <h2>More books for you</h2>
      <BookList books={books} oneCol={true} loading={loading} maxBooks={4} />
    </section>
  );
}

export default RandomBookList;
