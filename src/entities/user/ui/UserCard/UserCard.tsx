import { IUser } from "../../model";
import styles from "./styles.module.css";

interface Props {
  data: IUser;
}

const UserCard = ({ data }: Props) => {
  return (
    <div className={styles.cardContainer}>
      <p>You ID: {data.id}</p>
      <p>Name: {data.name}</p>
      <p>Username: {data.username}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>
        Adress: {data.address?.city}, {data.address?.street},{" "}
        {data.address?.suite}
      </p>
    </div>
  );
};

export default UserCard;
