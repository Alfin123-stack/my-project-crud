import PropTypes from "prop-types";
import { IoIosCalendar } from "react-icons/io";
import StatusBadge from "./StatusBadge"; // Import StatusBadge
import InfoItem from "./InfoItem";

const NoteInfo = ({ title, text, status, prioritas, date }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-xl dark:bg-gray-800 max-w-3xl mx-auto">
      <h1 className="text-4xl font-semibold text-gray-900 dark:text-white mb-6 border-b-2 border-gray-200 dark:border-gray-700 pb-4">
        {title}
      </h1>
      <p className="text-lg text-gray-800 dark:text-gray-300 mb-8 leading-relaxed">
        {text}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {/* Status */}
        <StatusBadge label="Status" value={status} />

        {/* Prioritas */}
        <StatusBadge label="Prioritas" value={prioritas} />
      </div>

      <div className="mb-8">
        {/* Date */}
        <InfoItem
          icon={<IoIosCalendar className="text-gray-500 dark:text-gray-400" />}
          label="Tanggal"
          value={new Date(date).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        />
      </div>
    </div>
  );
};

NoteInfo.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  prioritas: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default NoteInfo;
