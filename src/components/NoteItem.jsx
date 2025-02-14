import { IoPersonSharp, IoCalendar } from "react-icons/io5"; // Added IoCalendar for date
import PropTypes from "prop-types";
import InfoItem from "./InfoItem"; // Import the InfoItem component
import { useAuth } from "../context/AuthContext";
import NoteLink from "./NoteLink";
import StatusBadge from "./StatusBadge";

function NoteItem({ note }) {
  const { user: username } = useAuth();

  return (
    <li className="p-6 border rounded-xl shadow-lg bg-white dark:bg-gray-800 relative transition-transform transform hover:scale-105 hover:shadow-xl w-full max-w-3xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        {note.title}
      </h2>

      <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {note.text}
      </p>

      {/* Note Link */}
      <NoteLink noteId={note.id} />

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Status */}
        <StatusBadge label="Status" value={note.status} />

        {/* Prioritas */}
        <StatusBadge label="Prioritas" value={note.prioritas} />
      </div>

      <div className="flex justify-between items-center mt-4">
        {/* Date InfoItem */}
        <InfoItem
          icon={<IoCalendar />} // Calendar icon
          value={new Date(note.date).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        />

        {/* User InfoItem */}
        <InfoItem icon={<IoPersonSharp />} label="User" value={username} />
      </div>
    </li>
  );
}

NoteItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.string,
    prioritas: PropTypes.string,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default NoteItem;
