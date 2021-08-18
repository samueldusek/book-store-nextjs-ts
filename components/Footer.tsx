import React from "react";

// Styles
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.Footer}>
      <p className={styles.link}>
        Created by <a href="https://github.com/samueldusek">Samuel Dušek</a>.
      </p>
    </footer>
  );
}

export default Footer;
