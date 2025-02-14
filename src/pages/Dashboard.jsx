import NoteList from "../components/NoteList";
import Search from "../components/Search";
import Filter from "../components/Filter";
import { filterNotes } from "../services/noteService";
import { usePagination } from "../hooks/usePagination";
import Pagination from "../components/Pagination";
import FloatingActionButton from "../components/FloatingActionbutton";
import { IoIosAddCircle } from "react-icons/io";
import EmptyNotes from "../components/EmptyNotes";
import useQueryParams from "../hooks/useQueryParams";
import { prioritasOptions, statusOptions } from "../utils/optionsUtils";

const Dashboard = () => {
  const { currentPage, setCurrentPage, notesPerPage } = usePagination();
  const {
    keywords,
    status,
    prioritas,
    onSearchChangeHandler,
    onFilterChangeHandler,
  } = useQueryParams(setCurrentPage);

  // Filter the notes based on the current query parameters
  const filteredNotes = filterNotes({
    keywords,
    status,
    prioritas,
  });

  // Paginasi
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = filteredNotes.slice(indexOfFirstNote, indexOfLastNote);


  return (
    <div className="py-4">
      <section className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Search keyword={keywords} keywordChange={onSearchChangeHandler} />
        <Filter
          filterName="status"
          options={statusOptions}
          onFilterChange={onFilterChangeHandler}
        />
        <Filter
          filterName="prioritas"
          options={prioritasOptions}
          onFilterChange={onFilterChangeHandler}
        />
      </section>

      <NoteList notes={currentNotes} />

      {/* Paginasi */}
      {currentNotes.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredNotes.length / notesPerPage)}
          setCurrentPage={setCurrentPage}
        />
      )}

      {currentNotes.length === 0 && <EmptyNotes />}

      {/* Button untuk navigasi ke halaman Add Note */}
      <div className={`fixed sm:right-4 sm:bottom-4 right-2 bottom-2`}>
        <FloatingActionButton to="/addNote" icon={<IoIosAddCircle />} />
      </div>
    </div>
  );
};

export default Dashboard;
