import { ChangeEvent } from "react";
import styles from "./styles.module.css";

interface Props {
  search: string;
  placeholder: string;
  setSearch: (e: string) => void;
}

const InputSearch = ({ search, placeholder, setSearch }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.trim());
  };

  return (
    <input
      type="search"
      value={search}
      placeholder={placeholder}
      onChange={handleChange}
      className={styles.input}
    />
  );
};

export default InputSearch;
