import React from "react";
import Image from "next/image";

// Styles
import styles from "../styles/Home.module.css";

// Types
import { Book } from "../libs/book";

type BookCardProps = {
  book: Book;
};

function BookCard({ book }: BookCardProps) {
  return (
    <div>
      <Image
        src="/images/books/books1.png"
        alt="Book"
        width={200}
        height={300}
      />
      <h1>{book.title}</h1>
      <h5>Book author</h5>
      <h5>{book.datePublished}</h5>
      <h5>{book.isbn}</h5>
    </div>
  );
}

export default BookCard;
