import { CurrencyResponse, ICurrency } from "@/entities/currency/model";
import { CurrencyCard } from "@/entities/currency/ui";
import { actualCurrencies } from "@/shared/config/const";
import styles from "./styles.module.css";

interface Props {
  data: CurrencyResponse;
  selectCurrency: ICurrency;
}

const CurrencyList = ({ data, selectCurrency }: Props) => {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {actualCurrencies
          .filter((curr) => curr !== selectCurrency)
          .map((curr) => (
            <CurrencyCard
              key={curr}
              selectCurrency={selectCurrency}
              secondCurrency={curr}
              rate={data.rates[curr]}
            />
          ))}
      </ul>
    </section>
  );
};

export default CurrencyList;
