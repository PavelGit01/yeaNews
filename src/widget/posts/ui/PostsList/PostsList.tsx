import { IPost, PostCard } from "@/entities/news";
import withSkeleton from "@/shared/hocs/withSkeleton";
import styles from './styles.module.css'

interface Props {
  posts: IPost[];
}

const PostsList = ({ posts }: Props) => {
  return (
    <ul className={styles.postList}>
      {posts.map(({ id, title, body }) => (
        <PostCard key={id} id={id} title={title} body={body} />
      ))}
    </ul>
  );
};

const PostsListWithSkeleton = withSkeleton<Props>(PostsList, 10);

export default PostsListWithSkeleton
