import ProfileInput from "../components/ProfileInput";

const Profile = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Edit Profil
      </h2>
      <ProfileInput />
    </div>
  );
};

export default Profile;
