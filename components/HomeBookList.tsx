import React, { useState } from "react";

// Components
import BookList from "./BookList";
import Pagination from "./Pagination";

// Styles
import styles from "../styles/HomeBookList.module.css";

// Hooks
import { useGetBooks } from "../hooks/book";

function HomeBookList() {
  const [page, setPage] = useState(1);
  const { loading, error, books } = useGetBooks(page);

  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <section className={styles.HomeBookList}>
      <h2>Book List</h2>
      <BookList books={books} oneCol={false} loading={loading} maxBooks={10} />
      <Pagination
        isSmall={false}
        setPage={setPage}
        page={page}
        purpose="books"
      />
    </section>
  );
}

export default HomeBookList;
