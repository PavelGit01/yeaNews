import styles from "./styles.module.css";

const HomeGreetings = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.headerInfo}>Добро пожаловать на наш сайт!</h3>
      <p className={styles.mainText}>
        Здесь вы найдете самые свежие посты на разные темы — от новостей и
        технологий до лайфстайла и развлечений. Делитесь мнениями, обсуждайте
        актуальные события и оставайтесь в курсе последних трендов.
      </p>
      <p className={styles.mainText}>
        🌦 Виджет погоды поможет вам всегда быть готовым к любым капризам
        природы. Узнавайте актуальную температуру, осадки и прогноз на ближайшие
        дни прямо на главной странице.
      </p>
      <p className={styles.mainText}>
        💱 Виджет валютного обмена подскажет свежие курсы валют. Следите за
        изменениями, сравнивайте курсы и планируйте обмен выгодно.
      </p>
      <p className={styles.mainText}>
        Присоединяйтесь к нашему сообществу, публикуйте посты, комментируйте и
        будьте в центре событий! 🚀
      </p>
    </section>
  );
};

export default HomeGreetings;
