import { Post } from './@types';
import { getPostsData } from './api';
import { Posts } from './components';

export default async function Home() {
  const posts: Post[] = await getPostsData();

  return (
    <>
      <h1 className="text-3xl dark:text-sky-300 text-sky-700">
        Welcome to My App
      </h1>
      <p>This is app for showing posts</p>
      <Posts posts={posts} />
    </>
  );
}
