import { Paggination, usePaggination } from "@/feautures/paggination";
import { PostsList } from "@/widget/posts";
import { useGetNewsQuery } from "@/entities/news/api/api";
import styles from "./styles.module.css";

const PostListWithPaggination = () => {
  const { page, handleClickPage, handleNextPage, handlePrevPage } =
    usePaggination();

  const { data, isFetching, isError } = useGetNewsQuery({ page });

  const totalPage = data?.totalPosts ? Math.ceil(data.totalPosts / 10) : 0;

  if (isError) return <p>Ошибка получения данных...</p>;

  return (
    <section className={styles.section}>
      <Paggination
        top={true}
        bottom={true}
        currentPage={page}
        totalPage={totalPage}
        handleClickPage={handleClickPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      >
        <PostsList posts={data?.posts ?? []} isFetching={isFetching} />
      </Paggination>
    </section>
  );
};

export default PostListWithPaggination;
