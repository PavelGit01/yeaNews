import { IPagginationProps } from "../../model/types/types";
import styles from "./styles.module.css";

const PagginationButtons = ({
  currentPage,
  totalPage,
  handleNextPage,
  handlePrevPage,
  handleClickPage,
}: IPagginationProps) => {
  return (
    <div className={styles.pagginationContainer}>
      <button
        onClick={handlePrevPage}
        disabled={currentPage <= 1}
        className={styles.pagginationButton}
      >
        {"<"}
      </button>
      {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handleClickPage(page)}
          className={styles.pagginationButton}
          disabled={page === currentPage}
        >
          {page}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        disabled={currentPage >= totalPage}
        className={styles.pagginationButton}
      >
        {">"}
      </button>
    </div>
  );
};

export default PagginationButtons;
