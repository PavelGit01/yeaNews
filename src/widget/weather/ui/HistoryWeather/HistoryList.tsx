import { ReactNode } from "react";
import { City } from "@/entities/weather/module";
import { SearchButton } from "@/feautures/weather";
import styles from "./styles.module.css";

interface Props {
  list: City[];
  emptyComponent: ReactNode;
}

const HistoryList = ({ list, emptyComponent }: Props) => {
  return (
    <ul className={styles.list}>
      {!!list.length
        ? list.map((city) => (
            <li key={city.id}>
              <SearchButton search={city.name}>{city.name}</SearchButton>
            </li>
          ))
        : emptyComponent}
    </ul>
  );
};

export default HistoryList;
