import { useAuth } from "../context/AuthContext";
import FormInput from "./FormInput";
import Button from "./Button";
import useInput from "../hooks/useInput";

const LoginInput = () => {
  const [username, setUsername] = useInput("admin");
  const [password, setPassword] = useInput("1234");

  const { login } = useAuth();

  return (
    <form
      onSubmit={() => login(username, password)}
      className="space-y-4 max-w-md mx-auto p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <FormInput
        name="text"
        label="Username"
        value={username}
        onChange={setUsername}
        placeholder="Username"
        className="w-full dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" // Dark mode styling for input
      />

      <FormInput
        name="password"
        label="Password"
        value={password}
        onChange={setPassword}
        placeholder="Password"
        className="w-full dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" // Dark mode styling for input
      />

      <Button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 w-full py-3 sm:py-2 dark:bg-blue-600 dark:hover:bg-blue-700">
        Login
      </Button>
    </form>
  );
};

export default LoginInput;
