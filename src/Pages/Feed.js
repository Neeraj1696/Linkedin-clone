import React from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import VideocamIcon from "@material-ui/icons/Videocam";
import EventIcon from "@material-ui/icons/Event";
import AssignmentIcon from "@material-ui/icons/Assignment";

function Feed() {
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_Input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
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
    </div>
  );
}

export default Feed;
