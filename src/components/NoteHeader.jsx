import { useNavigate } from "react-router-dom";

const NoteHeader = () => {
  const navigate = useNavigate();

  return (
    <h1
      onClick={() => navigate("/")}
      className="text-3xl font-bold mb-2 sm:mb-0 dark:text-white cursor-pointer p-2 bg-blue-500 text-white rounded-lg">
      Notebook
    </h1>
  );
};

export default NoteHeader;
