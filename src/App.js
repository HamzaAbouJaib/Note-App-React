import { useState } from "react";
import Header from "./components/Header/Header";
import NoteInput from "./components/NoteInput/NoteInput";
import Note from "./components/Note/Note";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(getSavedNotes());
  localStorage.setItem("Notes", JSON.stringify(notes));

  function getSavedNotes() {
    if (JSON.parse(window.localStorage.getItem("Notes")) == null) {
      return [];
    }

    return [...JSON.parse(window.localStorage.getItem("Notes"))];
  }

  function addNote(note) {
    setNotes((prev) => {
      return [...prev, note];
    });
  }

  function delNote(id) {
    setNotes((prev) => {
      return prev.filter((note, index) => {
        return id !== index;
      });
    });
  }

  function setPinned(id) {
    setNotes((prev) => {
      return prev.map((note, index) => {
        if (id === index) {
          if (note.isPinned) {
            note.isPinned = false;
          } else {
            note.isPinned = true;
          }
        }
        return note;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <NoteInput addNote={addNote} />
      {notes.length === 0 ? (
        <h3 className="noNotes">Notes you add appear here</h3>
      ) : (
        <div className="noteContainer">
          {notes.map((note, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                delNote={delNote}
                isPinned={note.isPinned}
                setPinned={setPinned}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
