import PropTypes from "prop-types";

function Button({ type, onClick, children, className, isDisabled }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`${
        isDisabled ? "cursor-not-allowed" : "cursor-pointer "
      } py-3 text-lg rounded-lg shadow-md transition duration-200 transform focus:outline-none focus:ring-2 ${className} ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
      }`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
