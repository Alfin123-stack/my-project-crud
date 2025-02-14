import { Route, BrowserRouter, Routes } from "react-router-dom"; // Use Routes instead of Route
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import AppLayout from "./components/AppLayout";
import DetailNote from "./pages/DetailNote";
import NotFound from "./pages/NotFound";
import AddNote from "./pages/AddNote";
import { DarkModeProvider } from "./context/DarkModeContext";
import EditNote from "./pages/EditNote";

const App = () => {
  return (
    <BrowserRouter>
      <DarkModeProvider>
        <AuthProvider>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/note/:noteId" element={<DetailNote />} />
              <Route path="/addNote" element={<AddNote />} />
              <Route path="/editNote/:id" element={<EditNote />} />
            </Route>

            <Route path="/login" element={<Login />} />
            {/* Catch-all route for undefined paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </DarkModeProvider>
    </BrowserRouter>
  );
};

export default App;
