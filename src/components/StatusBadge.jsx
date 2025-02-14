import PropTypes from "prop-types";
import { getPrioritasColor, getStatusColor } from "../utils/colorsUtils";

const StatusBadge = ({ label, value }) => {
  const colorClass =
    label === "Status" ? getStatusColor(value) : getPrioritasColor(value);

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
        {label}:
      </span>
      <span
        className={`px-3 py-1 text-xs font-medium rounded-full ${colorClass}`}>
        {value || "Tidak Ditentukan"}
      </span>
    </div>
  );
};

StatusBadge.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default StatusBadge;
