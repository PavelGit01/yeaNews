import { LogoutButton } from "@/feautures/auth";
import { UserCard } from "@/entities/user/ui";
import { IUser } from "@/entities/user/model";
import { useGetUserInfoQuery } from "@/entities/user/api/api";
import { Fetcher } from "@/shared/ui";
import { CircleLoader } from "@/shared/loaders";
import styles from "./styles.module.css";

const Profile = () => {
  const fetchUser = (id: number) => useGetUserInfoQuery(id);

  return (
    <section className={styles.section}>
      <Fetcher
        queryArg={1}
        fetchFn={fetchUser}
        loader={<CircleLoader />}
        render={(data: IUser) => {
          return (
            <div className={styles.userContainer}>
              <UserCard data={data} />
              <LogoutButton />
            </div>
          );
        }}
      />
    </section>
  );
};

export default Profile;
