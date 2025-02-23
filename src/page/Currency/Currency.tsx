import { useAppSelector } from "@/app/appStore";
import { useGetCurrencyRatesQuery } from "@/entities/currency/api/api";
import { CurrencyCalc, CurrencyList } from "@/widget/currency/ui";
import styles from "./styles.module.css";
import { CircleLoader } from "@/shared/loaders";

const Currency = () => {
  const primaryCurrency = useAppSelector(
    (state) => state.currency.primaryCurrency
  );

  const { data, isLoading, isError } =
    useGetCurrencyRatesQuery(primaryCurrency);

  if (isLoading) return <CircleLoader />;

  if (isError && !data)
    return <p>Не удалось загрузить данные о валюте. Попробуйте позже.</p>;

  return (
    <div className={styles.container}>
      <CurrencyList data={data} selectCurrency={primaryCurrency} />
      <CurrencyCalc data={data} />
    </div>
  );
};

export default Currency;
