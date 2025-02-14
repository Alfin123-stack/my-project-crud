import PropTypes from "prop-types";

function FormInput({
  type,
  id,
  name,
  value,
  onChange,
  label,
  placeholder,
  options,
}) {
  if (type === "textarea") {
    return (
      <div className="space-y-2">
        <label
          htmlFor={id}
          className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
          {label}
        </label>
        <textarea
          id={id}
          name={name}
          rows="4"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white focus:border-blue-500 transition-all"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }

  if (type === "select") {
    return (
      <div className="space-y-2">
        <label
          htmlFor={id}
          className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
          {label}
        </label>
        <select
          id={id}
          name={name}
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white focus:border-blue-500 transition-all"
          value={value}
          onChange={onChange}>
          <option value="">Pilih {label}</option>
          {options &&
            options.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
        </select>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white focus:border-blue-500 transition-all"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

FormInput.propTypes = {
  type: PropTypes.oneOf(["text", "password", "email", "select", "textarea"]),
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FormInput;
