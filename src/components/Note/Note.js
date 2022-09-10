import React from "react";
import { BsFillTrashFill, BsPin, BsFillPinFill } from "react-icons/bs";
import styles from "./Note.module.css";

const Note = (props) => {
  return (
    <div className={styles.note + " " + (props.isPinned && styles.pin)}>
      {props.isPinned ? (
        <BsFillPinFill
          className={styles.pinIcon}
          onClick={() => {
            props.setPinned(props.id);
          }}
        />
      ) : (
        <button
          className={styles.pinIcon}
          onClick={() => {
            props.setPinned(props.id);
          }}
        >
          <BsPin />
        </button>
      )}

      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button
        className={styles.deleteButton}
        onClick={() => {
          props.delNote(props.id);
        }}
      >
        <BsFillTrashFill />
      </button>
    </div>
  );
};

export default Note;
