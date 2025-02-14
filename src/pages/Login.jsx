import LoginInput from "../components/LoginInput";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full sm:w-96 max-w-md">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
          Welcome Back!
        </h2>
        <p className="text-gray-500 dark:text-gray-300 mb-4 text-center">
          Please enter your credentials to login.
        </p>

        <LoginInput />
      </div>
    </div>
  );
};

export default Login;
