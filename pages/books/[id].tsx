import React from "react";

import { bookCovers } from "../../libs/book";

// Components
import BookList from "../../components/BookList";

// Types
import { Book } from "../../libs/book";

// Styles
import styles from "../../styles/BookPage.module.css";

function BookPage() {
  const book: Book = {
    id: 1,
    title: "Harry Potter",
    author: { id: 1, name: "Samuel Dusek" },
    isbn: 2423,
    datePublished: "1.9.2021",
  };
  return (
    <main className={styles.BookPage}>
      <h1 className={styles.heading}>{book.title}</h1>
      <section className={styles.bookSection}>
        <div className={styles.bookInfo}>
          <div className={styles.bookCover}>
            <img src={bookCovers[(book.id - 1) % 10]} alt="Book cover" />
          </div>
          <div className={styles.bookInfoText}>
            <div className={styles.author}>
              <h4 className={styles.infoHeading}>Author</h4>
              <h2 className={styles.authorName}>
                <a>{book.author.name}</a>
              </h2>
            </div>
            <div className={styles.data}>
              <h4 className={styles.infoHeading}>Chapters</h4>
              Chapter 1<h4 className={styles.infoHeading}>Published</h4>
              <h3 className={styles.bookData}>20.20.2020</h3>
              <h4 className={styles.infoHeading}>ISBN</h4>
              <h3 className={styles.bookData}>{book.isbn}</h3>
            </div>
          </div>
        </div>
        <div className={styles.bookList}>
          <BookList oneCol maxBooks={4} page={3} />
        </div>
      </section>
    </main>
  );
}

export default BookPage;
