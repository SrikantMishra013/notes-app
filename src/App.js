import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Sidebar from "./components/Sidebar";
const App = () => {
  const [notes, setNotes] = useState(JSON.parse(
    localStorage.getItem('react-notes-app-data')) || []);
  const [selectedNoteId, setSelectedNoteId] = useState(null); // Track the currently edited note
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const tempNote = [...notes]
    const date = new Date();
    tempNote.push({
      id: nanoid(),
      title: "",
      color: selectedColor,
      text: "",
      date: date.toLocaleString(),
    });
    setNotes(tempNote);
  }

  const changeColor = (color) => {
    // Set the selected color and apply it to the currently edited note
    setSelectedColor(color);
    if (selectedNoteId) {
      const updatedNotes = notes.map((note) =>
        note.id === selectedNoteId ? { ...note, color } : note
      );
      setNotes(updatedNotes);
    }
  }

  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id)
    setNotes(newNote);
  }
  const updateText = (text, id) => {
    const tempNote = [...notes];
    const index = tempNote.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNote[index].text = text;
    setNotes(tempNote);
  }
  const updateTitle = (text, id) => {
    const tempNote = [...notes];
    const index = tempNote.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNote[index].title = text;
    setNotes(tempNote);
  }

  return (
    <div className="container">
      <Sidebar addNote={addNote}
        changeColor={changeColor} />
      <NotesList notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
        updateTitle={updateTitle}
        setSelectedNoteId={setSelectedNoteId} />
    </div>
  );
}

export default App;
