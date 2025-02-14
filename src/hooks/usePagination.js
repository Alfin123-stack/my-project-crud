import { useState } from "react";

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 5;

  return {
    currentPage,
    setCurrentPage,
    notesPerPage,
  };
};
