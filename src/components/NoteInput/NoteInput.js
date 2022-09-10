import React from "react";
import { useState, useRef } from "react";
import styles from "./NoteInput.module.css";

const NoteInput = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef();
  const textAreaRef = useRef();

  function handleOnAdd() {
    props.addNote({
      title: inputRef.current.value,
      content: textAreaRef.current.value,
      isPinned: false,
    });
    inputRef.current.value = "";
    textAreaRef.current.value = "";
  }

  return (
    <div className={styles.noteInput}>
      <div className={styles.inputContainer}>
        {isExpanded && (
          <>
            <input
              ref={inputRef}
              className={styles.input}
              type="text"
              placeholder="Title"
            />
            <button className={styles.submitButton} onClick={handleOnAdd}>
              +
            </button>
          </>
        )}
        <textarea
          ref={textAreaRef}
          name="textarea"
          className={isExpanded ? styles.textarea : styles.textAreaUnexpanded}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onClick={() => {
            setIsExpanded(true);
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default NoteInput;
