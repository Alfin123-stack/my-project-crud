import FormInput from "../components/FormInput";
import Button from "../components/Button";
import useAddInput from "../hooks/useAddInput";

function AddInput() {
  const {
    title,
    note,
    status,
    prioritas,
    onTitleChange,
    onNoteChange,
    onStatusChange,
    onPrioritasChange,
    handleAddNote,
  } = useAddInput();

  return (
    <form onSubmit={handleAddNote} className="space-y-6">
      <FormInput
        type="text"
        id="title"
        label="Judul Catatan"
        value={title}
        onChange={onTitleChange}
        placeholder="Judul Catatan"
      />

      <FormInput
        type="select"
        id="status"
        label="Status Catatan"
        value={status}
        onChange={onStatusChange}
        options={["Belum Selesai", "Proses", "Selesai"]}
      />

      <FormInput
        type="select"
        id="prioritas"
        label="Prioritas Catatan"
        value={prioritas}
        onChange={onPrioritasChange}
        options={["Tinggi", "Sedang", "Rendah"]}
      />

      <FormInput
        type="textarea"
        id="note"
        label="Isi Catatan"
        value={note}
        onChange={onNoteChange}
        placeholder="Tulis catatan..."
      />

      <Button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 w-full">
        Tambah Catatan
      </Button>
    </form>
  );
}

export default AddInput;
