import React, { useState } from "react";
import classNames from "classnames";

// Components
import AuthorList from "./AuthorList";
import Pagination from "./Pagination";

// Styles
import styles from "../styles/HomeAuthorList.module.css";

function HomeAuthorList() {
  const [page, setPage] = useState(1);
  return (
    <section className={styles.HomeAuthorList}>
      <AuthorList page={page} isRow={false} maxAuthors={10} />
      <Pagination page={page} setPage={setPage} isSmall purpose="authors" />
    </section>
  );
}

export default HomeAuthorList;
