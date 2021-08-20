import React from "react";

// Components
import AuthorCard from "./AuthorCard";

// Styles
import styles from "../styles/AuthorList.module.css";

// Hooks
import { useGetAuthors } from "../hooks/author";

// Types
type AuthorListProps = {
  page: number;
};

function AuthorList({ page }: AuthorListProps) {
  const { loading, error, authors } = useGetAuthors(page);

  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <section className={styles.AuthorList}>
      <h2 className={styles.heading}>See our authors</h2>

      <div className={styles.authors}>
        {authors.map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </div>
    </section>
  );
}

export default AuthorList;
