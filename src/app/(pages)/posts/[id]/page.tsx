import { Comment, Post } from '@/app/@types';
import { getCommentsData, getPostsData } from '@/app/api';
import { CommentCard, PostCard } from '@/app/components';

interface Props {
  params: { id: string };
}

const PostPage = async ({ params }: Props) => {
  const { id } = params;
  const post: Post = await getPostsData(+id);
  const comments: Comment[] = await getCommentsData(+id);

  return (
    <div className="flex flex-col gap-10">
      <PostCard
        id={post.id}
        title={post.title}
        body={post.body}
        link="/"
        linkTitle="Go to Home Page"
      />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {!!comments &&
          comments.map((comment, index) => (
            <li key={index} className="flex justify-center">
              <CommentCard
                key={comment.id}
                name={comment.name}
                body={comment.body}
                email={comment.email}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PostPage;
