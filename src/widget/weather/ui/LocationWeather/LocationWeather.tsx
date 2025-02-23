import { useAppSelector } from "@/app/appStore";
import { WeatherFetcher, WeatherSearch } from "@/feautures/weather";
import { Weather } from "@/entities/weather/module";
import { WeatherCard } from "@/entities/weather/ui";
import styles from "./styles.module.css";

const LocationWeather = () => {
  const searchCity = useAppSelector((state) => state.weather.weatherLocation);

  return (
    <section className={styles.section}>
      <WeatherSearch />
      {searchCity ? (
        <WeatherFetcher
          key={searchCity}
          cityName={searchCity}
          render={(data: Weather) => {
            return <WeatherCard cityName={searchCity} weatherData={data} />;
          }}
        />
      ) : (
        <p>Введите название города</p>
      )}
    </section>
  );
};

export default LocationWeather;
