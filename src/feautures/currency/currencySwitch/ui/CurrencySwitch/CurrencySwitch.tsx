import { CgArrowsExchangeAltV } from "react-icons/cg";
import { useAppDispatch } from "@/app/appStore";
import { swapCurrencies } from "@/entities/currency/model/slice/currencySlice";
import styles from "./styles.module.css";

const CurrencySwitch = () => {
  const dispatch = useAppDispatch();

  return (
    <CgArrowsExchangeAltV
      className={styles.switcher}
      size={32}
      onClick={() => dispatch(swapCurrencies())}
    />
  );
};

export default CurrencySwitch;
