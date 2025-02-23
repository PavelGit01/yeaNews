import { PiThermometerThin } from "react-icons/pi";
import { LiaWindSolid } from "react-icons/lia";
import { Img } from "@/shared/ui";
import styles from "./styles.module.css";

interface Props {
  temp: number;
  icon: string;
  windSpeed: number;
}
const TempInfo = ({ temp, icon, windSpeed }: Props) => {
  return (
    <div className={styles.tempInfo}>
      <p>
        <LiaWindSolid /> {windSpeed}m/s
      </p>
      <p className={styles.infoTemperature}>
        <PiThermometerThin />
        {temp.toFixed(1)} &#8451;
      </p>
      <Img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
};

export default TempInfo;
