import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { useGetWeatherQuery } from "@/entities/weather/api/api";
import { Weather } from "@/entities/weather/module";
import { addHistorySearch } from "@/entities/weather/module/slice/weatherSlice";
import { CircleLoader } from "@/shared/loaders";
import { ReactNode, useEffect } from "react";

interface Props {
  cityName: string;
  render: (data: Weather) => ReactNode;
}

const WeatherFetcher = ({ cityName, render }: Props) => {
  const { data, isLoading, isError, isSuccess } = useGetWeatherQuery(cityName);

  const dispatch = useAppDispatch();

  const historySearch = useAppSelector((state) => state.weather.historySearch);

  const historyAdd = (data: Weather, cityName: string) => {
    if (!data.id || historySearch.some((city) => city.id === data.id)) return;

    dispatch(addHistorySearch({ id: data.id, name: cityName }));
  };

  useEffect(() => {
    if (isSuccess && data) {
      historyAdd(data, cityName);
    }
  }, [isSuccess, data, cityName]);

  if (isLoading) {
    return <CircleLoader />;
  }

  if (isError || !data) {
    return <p>Город не найден.</p>;
  }

  return render(data);
};

export default WeatherFetcher;
