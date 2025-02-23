import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "@/app/appStore";
import { setWeatherLocation } from "@/entities/weather/module/slice/weatherSlice";
import InputSearch from "./InputSearch";
import SearchButton from "../SearchButton/SearchButton";
import styles from "./styles.module.css";

const WeatherSearch = () => {
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("q");

  const [search, setSearch] = useState(searchQuery || "");

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchQuery) {
      dispatch(setWeatherLocation(searchQuery));
    }
  }, []);

  return (
    <div className={styles.handleFeauturesContainer}>
      <InputSearch
        search={search}
        setSearch={setSearch}
        placeholder="Название города."
      />
      <SearchButton search={search}>Найти</SearchButton>
    </div>
  );
};

export default WeatherSearch;
