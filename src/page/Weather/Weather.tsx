import { HistoryWeather, LocationWeather } from "@/widget/weather";
import styles from "./styles.module.css";

const Weather = () => {
  return (
    <div className={styles.container}>
      <LocationWeather />
      <HistoryWeather />
    </div>
  );
};

export default Weather;
