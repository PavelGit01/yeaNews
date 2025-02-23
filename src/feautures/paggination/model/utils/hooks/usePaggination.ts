import { useState } from "react";

export const usePaggination = () => {
  const [page, setPage] = useState(1);

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleClickPage = (newPage: number) => {
    setPage(newPage);
  };

  return { page, handlePrevPage, handleNextPage, handleClickPage };
};
