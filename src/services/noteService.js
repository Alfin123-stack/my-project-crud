import staticNotes from "../utils/data";

export const getNotes = () => {
  return JSON.parse(localStorage.getItem("notes")) || staticNotes;
};

export const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

export const addNote = (note) => {
  const newNote = {
    id: Date.now(),
    title: note.title,
    text: note.text,
    status: note.status,
    prioritas: note.prioritas,
    date: new Date().toISOString(),
  };
  const notes = getNotes();
  const updatedNotes = [...notes, newNote];
  saveNotes(updatedNotes);
  return newNote;
};

export const editNote = (id, updatedNote) => {
  const notes = getNotes();
  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    // Update the note at the given index
    notes[index] = {
      ...notes[index], // Preserve other properties
      ...updatedNote, // Apply updates
    };
    saveNotes(notes); // Save the updated notes array
    return notes[index]; // Return the updated note
  }

  return null; // Return null if the note is not found
};

export const deleteNote = (id) => {
  const notes = getNotes();
  const updatedNotes = notes.filter((n) => n.id !== id);
  saveNotes(updatedNotes);
  return updatedNotes;
};

export const getNoteById = (id) => {
  const notes = getNotes();
  return notes.find((note) => note.id === id);
};

export const filterNotes = ({ keywords, status, prioritas }) => {
  const notes = getNotes();
  return notes.filter((note) => {
    const isStatusMatch = status ? note.status === status : true;
    const isPrioritasMatch = prioritas ? note.prioritas === prioritas : true;
    const isTextMatch = keywords
      ? note.title.toLowerCase().includes(keywords.toLowerCase()) // Add title match
      : true;
    return isStatusMatch && isPrioritasMatch && isTextMatch;
  });
};
