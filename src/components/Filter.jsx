import PropTypes from "prop-types";

const Filter = ({ filterName, options, onFilterChange }) => {
  const handleFilterChange = (e) => {
    const newValue = e.target.value;
    onFilterChange(filterName, newValue);
  };

  return (
    <div className="w-full sm:w-auto">
      <select
        id={filterName}
        className="w-full sm:w-auto p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all" onChange={handleFilterChange}>
        <option value="" className="text-gray-500 dark:text-gray-400">
          Pilih {filterName}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="dark:text-white">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

Filter.propTypes = {
  filterName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
