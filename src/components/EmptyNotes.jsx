import { FaRegStickyNote } from "react-icons/fa"; // Optional: You can use an icon
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function EmptyNotes() {
  const navigate = useNavigate();
  const handleAddNote = () => {
    navigate("/addNote");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4 sm:px-8">
      <div className="text-center space-y-4">
        <div className="text-6xl text-gray-400 dark:text-gray-600 sm:text-7xl md:text-8xl">
          <FaRegStickyNote />
        </div>
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white sm:text-4xl md:text-5xl">
          Tidak Ada Catatan
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 sm:text-xl md:text-2xl">
          Sepertinya kamu belum menambahkan catatan apapun. Ayo buat yang
          pertama!
        </p>
        <Button
          type="button"
          onClick={handleAddNote}
          className="mt-6 px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 sm:px-8 sm:py-4">
          Tambah Catatan
        </Button>
      </div>
    </div>
  );
}

export default EmptyNotes;
