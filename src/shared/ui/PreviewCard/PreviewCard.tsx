import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

interface Props {
  title: string;
  text: string;
  image: string;
  buttonText: string;
  direct: string;
}

const PreviewCard = ({ title, text, image, buttonText, direct }: Props) => {
  const navigate = useNavigate();
  return (
    <article className={styles.article}>
      <img src={image} alt="PromoCard image" className={styles.img} />
      <div className={styles.description}>
        <h4>{title}</h4>
        <p>{text}</p>
        <button onClick={() => navigate(direct)}>{buttonText}</button>
      </div>
    </article>
  );
};

export default PreviewCard;
