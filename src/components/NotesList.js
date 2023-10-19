// import {useState} from 'react'
import Notes from "./Notes";
// import dark from "../asset/dark-icon.png"
import light from "../asset/light-icon.png" 
const NotesList = ({ notes, deleteNote, updateText, updateTitle }) => {

    // const [toggle,setToggle] = useState(false);
    return (
        <>
            <div className="note-list">
                <div className="toggle">
                    <h1>Notes</h1>
                    <img src={light} alt="light-icon" />
                </div>

                <div className="note-item">
                    {notes?.length > 0 ? notes.map(
                        note => (
                            <Notes
                                key={note.id}
                                id={note.id}
                                date={note.date}
                                text={note.text}
                                title={note.title}
                                color={note.color}
                                deleteNote={deleteNote}
                                updateText={updateText}
                                updateTitle={updateTitle} />
                        )) : <h2>No Notes Present</h2>}
                </div>

            </div>
        </>
    );
}
export default NotesList;