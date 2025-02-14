import FormInput from "../components/FormInput";
import Button from "../components/Button";
import useEditInput from "../hooks/useEditInput";

const EditInput = () => {
    const { formData, handleInputChange, handleSubmit } = useEditInput();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormInput
        type="text"
        id="title"
        name="title" // <-- Add the name attribute here
        value={formData.title}
        onChange={handleInputChange}
        label="Judul"
        placeholder="Masukkan judul catatan"
      />

      <FormInput
        type="textarea"
        id="text"
        name="text" // <-- Add the name attribute here
        value={formData.text}
        onChange={handleInputChange}
        label="Deskripsi"
        placeholder="Masukkan deskripsi catatan"
      />

      <FormInput
        type="select"
        id="status"
        name="status" // <-- Add the name attribute here
        value={formData.status}
        onChange={handleInputChange}
        label="Status"
        options={["Belum Selesai", "Proses", "Selesai"]}
      />

      <FormInput
        type="select"
        id="prioritas"
        name="prioritas" // <-- Add the name attribute here
        value={formData.prioritas}
        onChange={handleInputChange}
        label="Prioritas"
        options={["Tinggi", "Sedang", "Rendah"]}
      />

      <div className="flex justify-center">
        <Button
          type="submit"
          className="bg-blue-600 text-white hover:bg-blue-700 w-full">
          Simpan Perubahan
        </Button>
      </div>
    </form>
  );
};

export default EditInput;
