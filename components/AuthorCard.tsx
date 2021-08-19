import React from "react";

// Styles
import styles from "../styles/Author.module.css";

// Types
import { Author } from "../libs/author";
import { authorAvatars } from "../libs/author";

type AuthorCardProps = {
  author: Author;
};

function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className={styles.AuthorCard}>
      <a>
        <img
          src={authorAvatars[(author.id - 1) % 10]}
          alt="Author's avatar."
          className={styles.image}
        />
        <p className={styles.name}>{author.name}</p>
      </a>
    </div>
  );
}

export default AuthorCard;
