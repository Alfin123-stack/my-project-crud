import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useAuth } from "../context/AuthContext";
import { useDarkMode } from "../context/DarkModeContext"; // Import useDarkMode

function AppLayout() {
  const { user } = useAuth();
  const { mode } = useDarkMode(); 

  if (!user) return <Navigate to="/login" />;

  return (
    <div
      className={`min-h-screen flex flex-col ${
        mode === "dark" ? "dark" : ""
      } bg-white dark:bg-gray-900`} 
    >
      <Navbar />

      <main className="flex-1 px-4 sm:px-8 md:px-16 py-4 sm:py-6 md:py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
