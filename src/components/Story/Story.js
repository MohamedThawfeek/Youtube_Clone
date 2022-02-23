import React from "react";
import { Avatar } from "@material-ui/core";
import ReactPlayer from "react-player";
import "./Story.css";

const Story = ({ video, profile, title }) => {
  return (
    <div>
      <div className="story">
        <Avatar src={profile} className="story__avatar" />

        <div className="story__player">
          <ReactPlayer
            url={video}
            controls
            width="120px"
            height="200px"
            onStart={() => console.log("start")}
          />
        </div>

        <h5>{title}</h5>
      </div>
    </div>
  );
};

export default Story;
