export interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface PostsApiResponse {
  posts: IPost[];
  totalPosts: number;
}
