import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import InputOption from "./InputOption";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

function Post({ name, description, message, PhotoUrl }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar Photo={PhotoUrl} />
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_button">
        <InputOption Icon={ThumbUpIcon} title="Like" color="grey" />
        <InputOption Icon={CommentIcon} title="Comment" color="grey" />
        <InputOption Icon={ShareIcon} title="Share" color="grey" />
        <InputOption Icon={SendIcon} title="Send" color="grey" />
      </div>
    </div>
  );
}

export default Post;
