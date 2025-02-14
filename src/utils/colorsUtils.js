// src/utils/colorUtils.js
export const getStatusColor = (status) => {
  switch (status) {
    case "Selesai":
      return "bg-green-500 text-white";
    case "Belum Selesai":
      return "bg-gray-500 text-white";
    case "Proses":
      return "bg-yellow-500 text-white";
    default:
      return "bg-gray-300 text-gray-800";
  }
};

export const getPrioritasColor = (prioritas) => {
  switch (prioritas) {
    case "Tinggi":
      return "bg-red-500 text-white";
    case "Sedang":
      return "bg-yellow-500 text-white";
    case "Rendah":
      return "bg-green-500 text-white";
    default:
      return "bg-gray-300 text-gray-800";
  }
};
