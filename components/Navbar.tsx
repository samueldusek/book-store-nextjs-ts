import React from "react";
import Link from "next/link";

// Styles
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <h2 className={styles.heading}>Book Stor📚</h2>
      <Link href="/">
        <a className={styles.link}>HOME</a>
      </Link>
    </nav>
  );
}

export default Navbar;
