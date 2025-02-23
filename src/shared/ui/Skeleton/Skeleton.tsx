import styles from './styles.module.css'

interface Props {
  count: number;
}

const Skeleton = ({ count }: Props) => {
  return (
    <>
      {count > 1 ? (
        <ul className={styles.skeletonList}>
          {Array.from({ length: count }, (_, i) => i + 1).map((el) => (
            <li key={el} className={styles.skeletonCard}></li>
          ))}
        </ul>
      ) : (
        <li className={styles.skeletonCard}></li>
      )}
    </>
  );
};

export default Skeleton;
