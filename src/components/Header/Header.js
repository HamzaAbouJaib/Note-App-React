import React from "react";
import styles from "./Header.module.css";
import { FaRegStickyNote } from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <FaRegStickyNote className={styles.icon} />
        <h3>Note App</h3>
      </div>
    </div>
  );
};

export default Header;
