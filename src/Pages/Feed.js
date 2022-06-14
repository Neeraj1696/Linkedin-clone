import React, { useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import VideocamIcon from "@material-ui/icons/Videocam";
import EventIcon from "@material-ui/icons/Event";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Post from "./Post";
import SendIcon from "@material-ui/icons/Send";
// import { db } from "./firebase";
// import firebase from "firebase";

function Feed() {
  // const [posts, setPosts] = useState([]);

  const [input, setInput] = useState("");

  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) =>
  //     setPosts(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     )
  //   );
  // }, []);
  const sendPost = (e) => {
    e.preventDefault();

    //   db.collection("posts").add({
    //     name: "Neeraj Yadav",
    //     discription: "This is the Test",
    //     message: input,
    //     photoUrl: "",
    //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   });
  };
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_Input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              <SendIcon />
            </button>
          </form>
        </div>
        <div className="feed_inputOption">
          <InputOption Icon={ImageIcon} title="Photo" color="#7085F9" />
          <InputOption Icon={VideocamIcon} title="Video" color="green" />
          <InputOption Icon={EventIcon} title="Event" color="orange" />
          <InputOption
            Icon={AssignmentIcon}
            title="Write article"
            color="Red"
          />
        </div>
      </div>
      {/* {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))} */}
      <Post
        name="Neeraj Yadav"
        description="Front End Developer"
        message="THIS IS MY Message"
      />
      <Post
        name="Atif"
        description="Front End Developer"
        message="Hiii Every One"
      />
      <Post
        name="Usman "
        description="Front End Developer"
        message="Hiiii Guys I am Front end Developer"
      />
      <Post
        name="Raktima "
        description="Front End Developer"
        message="Hiiii Guys....."
      />
      <Post
        name="Mohammad"
        description="Front End Developer"
        message="Join to me "
      />

      <Post
        name="Sumit"
        description="Front End Developer"
        message="Connect To Linkedin"
      />
    </div>
  );
}

export default Feed;
