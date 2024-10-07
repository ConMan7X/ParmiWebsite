import Post from "./Post";
import postsData from "../data/posts.json";

function PostList() {
  return (
    <section>
      {postsData.map((post) => (
        <Post key={post.id} title={post.title} content={post.content} />
      ))}
    </section>
  );
}

export default PostList;
