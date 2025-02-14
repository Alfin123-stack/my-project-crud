import PropTypes from "prop-types";
import Button from "./Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing the icons
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const navigate = useNavigate();

  // Function to update the page in the query string and state
  const updatePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage); // Update the state with the new page
      // Update the query parameter 'page' in the URL
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("page", newPage);
      navigate({
        pathname: window.location.pathname,
        search: searchParams.toString(), // Update the URL
      });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center mt-4 space-y-2 sm:space-y-0 sm:flex-nowrap">
      {/* Prev Button with Icon */}
      <Button
        type="button"
        onClick={() => updatePage(currentPage - 1)}
        isDisabled={currentPage === 1}
        className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50 transition-all w-full sm:w-auto flex items-center justify-center">
        <FaChevronLeft className="text-gray-700 dark:text-gray-400" />
      </Button>

      {/* Page Indicator */}
      <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-400">
        Halaman {currentPage} dari {totalPages}
      </span>

      {/* Next Button with Icon */}
      <Button
        type="button"
        onClick={() => updatePage(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
        className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50 transition-all w-full sm:w-auto flex items-center justify-center">
        <FaChevronRight className="text-gray-700 dark:text-gray-400" />
      </Button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
