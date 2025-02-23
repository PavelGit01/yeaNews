import { IPost } from "../../model/types";
import styles from "./styles.module.css";

const PostCard = ({ id, title, body }: IPost) => {
  return (
    <li className={styles.cardContainer}>
      <p># {id}</p>
      <h3>Title: {title}</h3>
      <p>Description: {body}</p>
    </li>
  );
};

export default PostCard;
