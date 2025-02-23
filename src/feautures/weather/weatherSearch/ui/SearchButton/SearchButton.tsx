import { ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "@/app/appStore";
import { setWeatherLocation } from "@/entities/weather/module/slice/weatherSlice";
import { formatierCityName } from "@/shared/utils/utils";
import styles from './styles.module.css'

interface Props {
  children: ReactNode;
  search: string;
}

const SearchButton = ({ children, search }: Props) => {
  const [_, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  const handleClick = () => {
    const formatCityName = formatierCityName(search.trim());

    dispatch(setWeatherLocation(formatCityName));

    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);

      if (search.trim()) {
        params.set("q", formatCityName);
      } else {
        params.delete("q");
      }

      return params;
    });
  };

  return <button onClick={handleClick} className={styles.searchButt}>{children}</button>;
};

export default SearchButton;
