import React from "react";
import Link from "next/link";

// Resources
import { bookCovers } from "../../libs/book";

// Components
import RandomBookList from "../../components/RandomBookList";

// Styles
import styles from "../../styles/BookPage.module.css";

// Hooks
import { useGetBook } from "../../hooks/book";
import { useRouter } from "next/router";

function BookPage() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, book } = useGetBook(id);

  if (loading) {
    return <div>Loading..</div>;
  }

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
                <Link href={`/authors/${book.author.id}`}>
                  <a>{book.author.name}</a>
                </Link>
              </h2>
            </div>
            <div className={styles.data}>
              <h4 className={styles.infoHeading}>Chapters</h4>
              Chapter 1<h4 className={styles.infoHeading}>Published</h4>
              <h3 className={styles.bookData}>{book.datePublished}</h3>
              <h4 className={styles.infoHeading}>ISBN</h4>
              <h3 className={styles.bookData}>{book.isbn}</h3>
            </div>
          </div>
        </div>
        <div className={styles.bookList}>
          <RandomBookList />
        </div>
      </section>
    </main>
  );
}

export default BookPage;
