import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Nav from "./Nav";

const Home = () => {
  const [post, setPost] = useState("");
  const [postList, setPostList] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      if (!localStorage.getItem("_id")) {
        navigate("/");
      } else {
        console.log("Authenticated");
      }
    };

    checkUser();
  }, [navigate]);

  const createPost = () => {
    fetch("https://parmi-website-server.vercel.app/api/create/post", {
      method: "POST",
      body: JSON.stringify({
        post,
        userId: localStorage.getItem("_id"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setPostList(data.posts);
      })

      .catch((err) => console.error(err));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    createPost();
    setPost("");
  };

  return (
    <>
      <Nav />
      <main className="home">
        <h2 className="homeTitle">Create a Post</h2>
        <form className="homeForm" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            name="post"
            id="post"
            required
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          <button className="postBtn">POST</button>
        </form>

        <div className="post__container">
          {postList.map((post) => (
            <div className="post__item" key={post.id}>
              <p>{post.title}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
