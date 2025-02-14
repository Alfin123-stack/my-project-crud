import PropTypes from "prop-types";
import { IoIosCreate, IoIosTrash } from "react-icons/io";
import FloatingActionButton from "./FloatingActionbutton";

const NoteActions = ({ onEdit, onDelete }) => {
  return (
    <div
      className={`fixed sm:right-4 sm:bottom-4 right-4 bottom-16 flex gap-2 sm:flex-row flex-col`}>
      <FloatingActionButton icon={<IoIosCreate />} onClick={onEdit} />
      <FloatingActionButton icon={<IoIosTrash />} onClick={onDelete} />
    </div>
  );
};

NoteActions.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteActions;
