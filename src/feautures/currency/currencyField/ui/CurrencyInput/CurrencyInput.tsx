import { ChangeEvent } from "react";

interface Props {
  amount: number;
  inputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const CurrencyInput = ({ amount, inputChange }: Props) => {
  return (
    <input
      type="text"
      value={Number(amount.toFixed(2))}
      onChange={inputChange}
    />
  );
};

export default CurrencyInput;
