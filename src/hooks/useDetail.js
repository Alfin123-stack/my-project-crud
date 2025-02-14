import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteNote, getNoteById } from "../services/noteService";

const useDetail = () => {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const foundNote = getNoteById(parseInt(noteId)); // Using getNoteById
    if (foundNote) {
      setNote(foundNote);
    } else {
      navigate("/404");
    }
  }, [noteId, navigate]);

  const handleDelete = () => {
    deleteNote(note.id);
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleEdit = () => {
    navigate(`/editNote/${noteId}`);
  };

  return { note, handleDelete, handleEdit, handleBack };
};

export default useDetail;
