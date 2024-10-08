import Post from "./Post";
import postsData from "../data/posts.json";

function PostList() {
  return (
    <section>
      {postsData.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          content={post.content}
          createdAt={Date.parse(post.createdAt)}
        />
      ))}
    </section>
  );
}

export default PostList;
