import React from "react";
import classNames from "classnames";

// Components
import AuthorCard from "./AuthorCard";

// Styles
import styles from "../styles/AuthorList.module.css";

// Hooks
import { useGetAuthors } from "../hooks/author";

// Types
type AuthorListProps = {
  page: number;
  isRow: boolean;
  maxAuthors: number;
  setPage?: Function;
};

function AuthorList({ page, isRow, maxAuthors, setPage }: AuthorListProps) {
  const { loading, error, authors } = useGetAuthors(page);

  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <section
      className={classNames(styles.AuthorList, {
        [styles.AuthorListRow]: isRow,
      })}
    >
      <h2 className={styles.heading}>
        {isRow ? "Other top authors" : "See our authors"}
      </h2>

      <div
        className={classNames(styles.authors, {
          [styles.authorsRow]: isRow,
        })}
      >
        {authors.slice(0, maxAuthors).map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </div>
    </section>
  );
}

export default AuthorList;
