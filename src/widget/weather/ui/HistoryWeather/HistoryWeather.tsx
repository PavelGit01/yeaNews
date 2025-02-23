import { useAppSelector } from "@/app/appStore";
import HistoryList from "./HistoryList";
import styles from "./styles.module.css";

const HistoryWeather = () => {
  const historySearch = useAppSelector((state) => state.weather.historySearch);

  return (
    <section className={styles.section}>
      <p>История поиска:</p>
      <HistoryList list={historySearch} emptyComponent={<p>Список пуст.</p>} />
    </section>
  );
};

export default HistoryWeather;
