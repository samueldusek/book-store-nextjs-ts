import React from "react";
import classNames from "classnames";

// Styles
import styles from "../styles/Pagination.module.css";

type PaginationProps = {
  page: number;
  setPage: Function;
  purpose: string;
  isSmall: boolean;
};

function Pagination({ isSmall, page, setPage, purpose }: PaginationProps) {
  const buttons = [];

  for (let idx = 1; idx <= 5; idx++) {
    buttons.push(
      <button
        key={idx}
        className={classNames(styles.btn, {
          [styles.active]: page === idx,
        })}
        onClick={() => setPage(idx)}
      >
        {idx}
      </button>
    );
  }

  return (
    <nav
      aria-label={`Pagination for ${purpose}.`}
      className={classNames(styles.Pagination, {
        [styles.PaginationSmall]: isSmall,
      })}
    >
      {buttons}
    </nav>
  );
}

export default Pagination;
