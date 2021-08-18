import React from "react";

// Styles
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <h2 className={styles.heading}>Book Stor📚</h2>
      <p className={styles.link}>HOME</p>
    </nav>
  );
}

export default Navbar;
