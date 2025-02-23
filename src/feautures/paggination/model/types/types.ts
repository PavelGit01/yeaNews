export interface IPagginationProps {
  totalPage: number;
  currentPage: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handleClickPage: (page: number) => void;
}
