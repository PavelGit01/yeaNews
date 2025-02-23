import { ICurrency } from "@/entities/currency/model";
import { actualCurrencies } from "@/shared/config/const";

interface Props {
  currency: ICurrency;
  selectChange: (curr: ICurrency) => void;
}

const CurrencySelect = ({ currency, selectChange }: Props) => {
  return (
    <select
      value={currency}
      onChange={(e) => selectChange(e.target.value as ICurrency)}
    >
      {actualCurrencies.map((curr) => (
        <option key={curr} value={curr}>
          {curr}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelect;
