import React from "react";
import Link from "next/link";

// Styles
import styles from "../styles/BookCard.module.css";

// Types
import { Book } from "../libs/book";

// Random book covers
import { bookCovers } from "../libs/book";

type BookCardProps = {
  book: Book;
};

function BookCard({ book }: BookCardProps) {
  return (
    <div className={styles.BookCard}>
      <div className={styles.box}>
        <img
          className={styles.image}
          src={bookCovers[(book.id - 1) % 10]}
          alt="Book cover"
        />
        <div className={styles.text}>
          <h3 className={styles.heading}>{book.title}</h3>
          <h5 className={styles.author}>
            <Link href={`/authors/${book.author.id}`}>
              <a>{book.author.name}</a>
            </Link>
          </h5>
          <div className={styles.footer}>
            <div>
              <p className={styles.date}>{book.datePublished}</p>
              <p className={styles.isbn}>{book.isbn}</p>
            </div>
            <Link href={`/books/${book.id}`}>
              <a className={styles.link}>MORE</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
