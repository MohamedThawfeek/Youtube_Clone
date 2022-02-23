import React, { useState } from "react";
import "./Sidebar.css";
import SidebarRow from "./sidebarRow/SidebarRow";

import {
  Home,
  Explore,
  VideoLibrary,
  OndemandVideo,
  History,
  SlowMotionVideo,
  AccessTime,
  ThumbUpAltOutlined,
  ExpandMore,
  ExpandLess,
} from "@material-ui/icons";

const Sidebar = () => {
  const [icon, setIcon] = useState("home");
  const [more, setMore] = useState(true);

  return (
    <div className="sidebar">
      <div
        className={`icon__option ${
          icon === "home" ? "icon__option--active" : null
        } `}
        onClick={() => setIcon("home")}
      >
        <SidebarRow title="Home" Icon={Home} />
      </div>

      <div
        className={`icon__option ${
          icon === "explore" ? "icon__option--active" : null
        } `}
        onClick={() => setIcon("explore")}
      >
        <SidebarRow title="Explore" Icon={Explore} />
      </div>
      <div
        className={`icon__option ${
          icon === "short" ? "icon__option--active" : null
        } `}
        onClick={() => setIcon("short")}
      >
        <SidebarRow title="Shorts" Icon={OndemandVideo} />
      </div>
      <div
        className={`icon__option ${
          icon === "subs" ? "icon__option--active" : null
        } `}
        onClick={() => setIcon("subs")}
      >
        <SidebarRow title="Subscription" Icon={VideoLibrary} />
      </div>
      <br />
      <hr />
      <br />
      <div
        className={`icon__option ${
          icon === "library" ? "icon__option--active" : null
        } `}
        onClick={() => setIcon("library")}
      >
        <SidebarRow title="Library" Icon={VideoLibrary} />
      </div>
      <div
        className={`icon__option ${
          icon === "his" ? "icon__option--active" : null
        } `}
        onClick={() => setIcon("his")}
      >
        <SidebarRow title="History" Icon={History} />
      </div>
      <div
        className={`icon__option ${
          icon === "your video" ? "icon__option--active" : null
        } `}
        onClick={() => setIcon("your video")}
      >
        <SidebarRow title="Your Videos" Icon={SlowMotionVideo} />
      </div>
      <div
        className={`icon__option ${
          icon === "later" ? "icon__option--active" : null
        } `}
        onClick={() => setIcon("later")}
      >
        <SidebarRow title="Watch Later" Icon={AccessTime} />
      </div>
      <div
        className={`icon__option ${
          icon === "like" ? "icon__option--active" : null
        } `}
        onClick={() => setIcon("like")}
      >
        <SidebarRow title="Liked Videos" Icon={ThumbUpAltOutlined} />
      </div>
      {more ? (
        <div onClick={() => setMore(false)}>
          <div
            className={`icon__option ${
              icon === "more" ? "icon__option--active" : null
            } `}
            onClick={() => setIcon("more")}
          >
            <SidebarRow title="Show Less" Icon={ExpandLess} />
          </div>
        </div>
      ) : (
        <div onClick={() => setMore(true)}>
          <div
            className={`icon__option ${
              icon === "less" ? "icon__option--active" : null
            } `}
            onClick={() => setIcon("less")}
          >
            <SidebarRow title="Show More" Icon={ExpandMore} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
