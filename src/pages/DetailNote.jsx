import Button from "../components/Button";
import NoteActions from "../components/NoteAction";
import NoteInfo from "../components/NoteInfo";

import useDetail from "../hooks/useDetail";

const DetailNote = () => {
  const { note, handleDelete, handleEdit, handleBack } = useDetail();

  if (!note) return <div>Loading...</div>;
  return (
    <div className="sm:p-8 max-w-full sm:max-w-3xl mx-auto">
      <NoteInfo
        title={note.title}
        text={note.text}
        status={note.status}
        prioritas={note.prioritas}
        date={note.date}
      />
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <Button
          onClick={handleBack}
          className="px-6 py-3 text-blue-600 font-semibold border-2 border-blue-600 rounded-lg shadow-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-full sm:w-auto">
          Kembali
        </Button>
      </div>
      <NoteActions onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default DetailNote;
