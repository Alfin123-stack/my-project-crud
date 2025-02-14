import { useAuth } from "../context/AuthContext";
import DarkModeToggle from "./DarkModeToggle";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import UserDropdown from "./UserDropdown";
import Button from "./Button";
import NoteHeader from "./NoteHeader";

const Navbar = () => {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!user) return null;

  return (
    <nav className="flex justify-between flex-wrap items-center p-4 bg-gray-200 dark:bg-gray-800">
      {/* Logo */}
      <NoteHeader />

      {/* Toggle Menu Button for mobile */}
      <Button
        className="text-2xl sm:hidden p-4"
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {" "}
        <IoMdMenu className="text-gray-900 dark:text-white" />
      </Button>

      {/* Navbar Menu */}
      <section
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:flex sm:flex-row gap-4 flex-col items-center space-y-4 sm:space-y-0 w-full sm:w-auto border-t sm:border-none sm:border-t-0 border-gray-300 sm:border-transparent`}>
        {/* User Profile (Mobile and Desktop) */}

        {/* Dark Mode Toggle */}
        <div className="border-t sm:border-none sm:border-t-0 border-gray-300 w-full sm:w-auto pt-4 sm:pt-0">
          <DarkModeToggle />
        </div>

        {/* User Profile Dropdown */}
        <div className="border-t sm:border-none sm:border-t-0 border-gray-300 w-full sm:w-auto pt-4 sm:pt-0">
          <UserDropdown />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
