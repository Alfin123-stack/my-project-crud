import useInput from "./useInput"; // Adjust the path if needed
import { useNavigate } from "react-router-dom";
import { addNote } from "../services/noteService"; // Assuming addNote is from a service

const useAddInput = () => {
  const [title, onTitleChange] = useInput("");
  const [note, onNoteChange] = useInput("");
  const [status, onStatusChange] = useInput("");
  const [prioritas, onPrioritasChange] = useInput("");

  const navigate = useNavigate();

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!note || !title || !status || !prioritas) return;
    const newNote = addNote({ title, text: note, status, prioritas });
    navigate(`/note/${newNote.id}`);
  };

  return {
    title,
    note,
    status,
    prioritas,
    onTitleChange,
    onNoteChange,
    onStatusChange,
    onPrioritasChange,
    handleAddNote,
  };
};

export default useAddInput;
