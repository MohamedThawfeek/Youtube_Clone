import React from "react";
import ReactPlayer from "react-player";
import "./Video.css";
import { Avatar } from "@material-ui/core";

const Video = ({ video, profilePic, title, timestamp, username }) => {
  return (
    <div className="video">
      <div className="video__container">
        <div className="video__player">
          <ReactPlayer controls width="480px" height="240px" url={video} />
        </div>

        <div className="video__player1">
          <ReactPlayer controls width="280px" height="240px" url={video} />
        </div>
        <div className="video__player2">
          <ReactPlayer controls width="240px" height="240px" url={video} />
        </div>
        <div className="video__info">
          <Avatar src={profilePic} />
          <h3>{title}</h3>
        </div>
        <div className="video__bottom">
          <h5>{username}</h5>
          <p>{new Date(timestamp?.toDate()).toDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
