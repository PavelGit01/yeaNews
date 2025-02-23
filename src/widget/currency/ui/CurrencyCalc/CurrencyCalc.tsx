import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { CurrencyField, CurrencySwitch } from "@/feautures/currency";
import { CurrencyResponse, ICurrency } from "@/entities/currency/model";
import {
  setPrimaryCurrency,
  setSecondCurrency,
} from "@/entities/currency/model/slice/currencySlice";
import { useState } from "react";
import styles from "./styles.module.css";

interface Props {
  data: CurrencyResponse;
}

const CurrencyCalc = ({ data }: Props) => {
  const dispatch = useAppDispatch();

  const [amount, setAmount] = useState<number>(1);

  const primaryCurrency = useAppSelector(
    (state) => state.currency.primaryCurrency
  );

  const secondCurrency = useAppSelector(
    (state) => state.currency.secondCurrency
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    currency: ICurrency
  ) => {
    let value = e.target.value.replace(/[^0-9.]/g, "");

    if (value.startsWith("0") && value.length > 1) {
      value = value.replace(/^0+/, "");
    }

    const numericValue = Number(value) || 0;

    if (currency === primaryCurrency) {
      setAmount(numericValue);
    } else {
      setAmount(numericValue / (data.rates[secondCurrency] || 1));
    }
  };

  return (
    <section className={styles.section}>
      <CurrencyField
        currency={primaryCurrency}
        amount={amount}
        selectChange={(curr) => dispatch(setPrimaryCurrency(curr))}
        inputChange={(e) => handleInputChange(e, primaryCurrency)}
      />
      <CurrencySwitch />
      <CurrencyField
        currency={secondCurrency}
        amount={amount * (data.rates[secondCurrency] || 1)}
        selectChange={(curr) => dispatch(setSecondCurrency(curr))}
        inputChange={(e) => handleInputChange(e, secondCurrency)}
      />
    </section>
  );
};

export default CurrencyCalc;
