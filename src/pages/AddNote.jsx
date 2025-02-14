import AddInput from "../components/AddInput";

function AddNote() {
  return (
    <div className="p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
        Tambah Catatan
      </h1>
      <AddInput />
    </div>
  );
}

export default AddNote;
