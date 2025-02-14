import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FloatingActionButton = ({ to, icon, onClick, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(to);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-blue-500 text-3xl p-4 text-white rounded-full hover:bg-blue-600 cursor-pointer ${className}`}>
      {icon}
    </button>
  );
};

FloatingActionButton.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default FloatingActionButton;
