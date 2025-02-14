import PropTypes from "prop-types";

function Search({ keywordChange, keyword }) {
  return (
    <section className="w-full">
      <input
        type="text"
        aria-label="Search Notes"
        placeholder="Search notes..."
        value={keyword}
        onChange={(e) => keywordChange(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 dark:placeholder-gray-300 text-gray-900 dark:text-white bg-white dark:bg-gray-800" // Add dark:bg- and dark:text- classes
      />
    </section>
  );
}

Search.propTypes = {
  keywordChange: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
};

export default Search;
