import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNoteById, editNote } from "../services/noteService"; // Import your note services

const useEditInput = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    status: "",
    prioritas: "",
  });

  useEffect(() => {
    const fetchedNote = getNoteById(parseInt(id)); // Get note by ID
    if (fetchedNote) {
      setFormData(fetchedNote);
    } else {
      alert("Catatan tidak ditemukan!");
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedNote = {
      title: formData.title,
      text: formData.text,
      status: formData.status,
      prioritas: formData.prioritas,
    };

    const note = editNote(parseInt(id), updatedNote); // Edit note
    if (note) {
      navigate(`/note/${id}`, { replace: true }); // Navigate to the note page after update
    } else {
      alert("Catatan tidak ditemukan!");
    }
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
  };
};

export default useEditInput;
