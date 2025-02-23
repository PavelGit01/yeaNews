import { Weather } from "../../module";
import styles from "./styles.module.css";

interface Props extends Pick<Weather, "coord" | "visibility" | "main"> {}

const ExtraInfo = ({ coord, main, visibility }: Props) => {
  return (
    <div className={styles.extraInfo}>
      <p>Видимость: {visibility / 1000} км.</p>
      <p>Влажность: {main.humidity}%</p>
      <p>
        Координаты: {coord.lat} {coord.lon}
      </p>
    </div>
  );
};

export default ExtraInfo;
