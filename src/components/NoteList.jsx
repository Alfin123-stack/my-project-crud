import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

function NoteList({ notes, deleteNote }) {
  return (
    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </ul>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      status: PropTypes.string,
      prioritas: PropTypes.string,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default NoteList;
