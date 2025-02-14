import EditInput from "../components/EditInput";

const EditNote = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg dark:bg-gray-800">
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-6">
        Edit Catatan
      </h1>
      <EditInput />
    </div>
  );
};

export default EditNote;
