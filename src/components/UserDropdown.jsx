import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button"; // Adjust the path based on where Button is located
import useDropdown from "../hooks/useDropdown";

const UserDropdown = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { isOpen, setIsOpen, dropdownRef } = useDropdown();

  if (!user) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none w-full sm:w-auto flex items-center justify-between">
        <span className="truncate">{user}</span>{" "}
        {/* Truncate text if user name is long */}
        <IoMdArrowDropdown className="text-gray-900 dark:text-white" />
      </Button>

      {isOpen && (
        <div className="absolute sm:right-0 mt-2 w-full sm:w-40 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded shadow-lg">
          <Button
            type="button"
            onClick={() => {
              navigate("/profile");
              setIsOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
            Profil
          </Button>
          <Button
            type="button"
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600">
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
