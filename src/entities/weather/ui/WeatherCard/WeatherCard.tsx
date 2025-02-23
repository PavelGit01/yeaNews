import { Weather } from "../../module";
import ExtraInfo from "./ExtraInfo";
import TempInfo from "./TempInfo";
import styles from "./styles.module.css";

interface Props {
  cityName: string;
  weatherData: Weather;
}

const WeatherCard = ({ cityName, weatherData }: Props) => {
  return (
    <article className={styles.cardContainer}>
      <h3>{cityName}</h3>
      <TempInfo
        temp={weatherData.main.temp}
        icon={weatherData.weather[0].icon}
        windSpeed={weatherData.wind.speed}
      />
      <ExtraInfo
        coord={weatherData.coord}
        main={weatherData.main}
        visibility={weatherData.visibility}
      />
    </article>
  );
};

export default WeatherCard;
