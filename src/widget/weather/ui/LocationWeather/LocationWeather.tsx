import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { WeatherSearch } from "@/feautures/weather";
import { Weather } from "@/entities/weather/module";
import { WeatherCard } from "@/entities/weather/ui";
import styles from "./styles.module.css";
import { addHistorySearch } from "@/entities/weather/module/slice/weatherSlice";
import { useGetWeatherQuery } from "@/entities/weather/api/api";
import { Fetcher } from "@/shared/ui";
import { CircleLoader } from "@/shared/loaders";

const LocationWeather = () => {
  const dispatch = useAppDispatch();

  const searchCity = useAppSelector((state) => state.weather.weatherLocation);

  const historySearch = useAppSelector((state) => state.weather.historySearch);

  const fetchFn = (queryArg: string) => useGetWeatherQuery(queryArg);

  const historyAdd = (data: Weather, cityName: string) => {
    if (!data.id || historySearch.some((city) => city.id === data.id)) return;

    dispatch(addHistorySearch({ id: data.id, name: cityName }));
  };

  return (
    <section className={styles.section}>
      <WeatherSearch />
      {searchCity ? (
        <Fetcher
          key={searchCity}
          queryArg={searchCity}
          fetchFn={fetchFn}
          sideFn={historyAdd}
          loader={<CircleLoader />}
          error={<p>Город не найден.</p>}
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
