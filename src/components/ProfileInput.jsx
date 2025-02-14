import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import useInput from "../hooks/useInput";

const ProfileInput = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [userName, setUserName] = useInput(user || "");

  const handleSave = () => {
    setUser(userName);
    navigate("/");
  };

  return (
    <form onSubmit={handleSave}>
      <FormInput
        type="text"
        label="Nama Lengkap"
        value={userName}
        onChange={setUserName}
        placeholder="Nama Lengkap"
      />
      <Button className="mt-4 w-full bg-blue-500 text-white p-2 rounded">
        Simpan & Kembali
      </Button>
    </form>
  );
};

export default ProfileInput;
