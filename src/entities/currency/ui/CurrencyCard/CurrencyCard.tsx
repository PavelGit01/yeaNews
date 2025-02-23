interface Props {
  selectCurrency: string;
  secondCurrency: string;
  rate?: number;
}

export const CurrencyCard = ({
  selectCurrency,
  secondCurrency,
  rate,
}: Props) => {
  return <li>{`1 ${selectCurrency} = ${rate ?? "-"} ${secondCurrency}`}</li>;
};
