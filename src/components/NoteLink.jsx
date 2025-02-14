import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NoteLink = ({ noteId }) => (
  <div className="mt-4">
    <Link
      to={`/note/${noteId}`}
      className="text-blue-600 hover:text-blue-800 font-medium transition-all">
      Lihat Detail
    </Link>
  </div>
);

NoteLink.propTypes = {
  noteId: PropTypes.string.isRequired,
};

export default NoteLink;
