import HomeGreetings from "./ui/HomeGreetings/HomeGreetings";
import { PreviewCard } from "@/shared/ui";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <HomeGreetings />
      <section className={styles.section}>
        <PreviewCard
          title="Погода в вашем городе"
          text="Будьте готовы к любым капризам природы. Актуальный прогноз прямо здесь!"
          image="https://obzoor.by/wp-content/uploads/2023/06/09877gnernol-0-.jpg"
          buttonText="Узнать подробнее..."
          direct="weather"
        />
        <PreviewCard
          title="Курс валют"
          text="Свежие курсы валют и удобный калькулятор для быстрого расчета."
          image="https://money24.kr.ua/wp-content/uploads/2021/02/2.jpg"
          buttonText="Узнать подробнее..."
          direct="currency"
        />
      </section>
    </div>
  );
};

export default Home;
