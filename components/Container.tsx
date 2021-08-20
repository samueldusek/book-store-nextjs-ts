import React, { ReactNode } from "react";

import styles from "../styles/Container.module.css";

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
