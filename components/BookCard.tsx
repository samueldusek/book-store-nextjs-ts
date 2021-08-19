import React from "react";

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
          <h5 className={styles.author}>{book.author.name}</h5>
          <div className={styles.footer}>
            <div>
              <p className={styles.date}>{book.datePublished}</p>
              <p className={styles.isbn}>{book.isbn}</p>
            </div>
            <div className={styles.link}>MORE</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
