import { ChangeEvent } from "react";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import { ICurrency } from "@/entities/currency/model";
import CurrencyInput from "../CurrencyInput/CurrencyInput";

interface Props {
  currency: ICurrency;
  amount: number;
  selectChange: (curr: ICurrency) => void;
  inputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CurrencyField = ({
  currency,
  amount,
  selectChange,
  inputChange,
}: Props) => {
  return (
    <div>
      <CurrencyInput amount={amount} inputChange={inputChange} />
      <CurrencySelect currency={currency} selectChange={selectChange} />
    </div>
  );
};

export default CurrencyField;
