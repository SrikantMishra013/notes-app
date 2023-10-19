import { MdDeleteForever } from 'react-icons/md';

const Notes = ({ id, text, date, title, color, deleteNote, updateText, updateTitle }) => {
    const handleTextChange = (newText) => {
        updateText(newText, id);
    };

    const handleTitleChange = (newTitle) => {
        updateTitle(newTitle, id);
    };

    return (
        <div className="note" style={{ backgroundColor: color }}>
            <div>
                <textarea
                    style={{ fontWeight: 600 }}
                    rows="1"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                />
                <textarea
                    rows="5"
                    placeholder="Note"
                    value={text}
                    onChange={(e) => handleTextChange(e.target.value)}
                />
            </div>
            <div className="note-footer">
                <small style={{userSelect: "none"}}>
                    {date}
                </small>
                <MdDeleteForever
                    className="delete-note"
                    size="1.3em"
                    onClick={() => deleteNote(id)}
                />
            </div>
        </div>
    );
}

export default Notes;
