import React from "react";
import Link from "next/link";

// Styles
import styles from "../styles/AuthorCard.module.css";

// Types
import { Author } from "../libs/author";

// Resources
import { authorAvatars } from "../libs/author";

type AuthorCardProps = {
  author: Author;
};

function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className={styles.AuthorCard}>
      <Link href={`/authors/${author.id}`}>
        <a>
          <img
            src={authorAvatars[(author.id - 1) % 10]}
            alt="Author's avatar."
            className={styles.image}
          />

          <p className={styles.name}>{author.name}</p>
        </a>
      </Link>
    </div>
  );
}

export default AuthorCard;
