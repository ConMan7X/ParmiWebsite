import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Nav from "./Nav";

const Home = () => {
  const [thread, setThread] = useState("");
  const [threadList, setThreadList] = useState<any[]>([]);
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

  const createThread = () => {
    fetch("http://localhost:4000/api/create/thread", {
      method: "POST",
      body: JSON.stringify({
        thread,
        userId: localStorage.getItem("_id"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setThreadList(data.threads);
      })

      .catch((err) => console.error(err));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    createThread();
    setThread("");
  };

  return (
    <>
      <Nav />
      <main className="home">
        <h2 className="homeTitle">Create a Thread</h2>
        <form className="homeForm" onSubmit={handleSubmit}>
          {/*--form UI elements--*/}
        </form>

        <div className="thread__container">
          {threadList.map((thread) => (
            <div className="thread__item" key={thread.id}>
              <p>{thread.title}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
