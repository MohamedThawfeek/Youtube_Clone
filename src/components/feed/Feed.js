import React, { useState, useEffect } from "react";
import "./Feed.css";
import { useSelector } from "react-redux";

import { VideoCallOutlined } from "@material-ui/icons";
import { Button, LinearProgress } from "@material-ui/core";
import { db, storage, timestamp } from "../firebade/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import Video from "../Video/Video";
import StorySlider from "../StorySlider/StorySlider";

const Feed = () => {
  const user = useSelector((state) => state.user);

  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);
  const [input, setInput] = useState("");
  const [post, setPost] = useState([]);

  const handel = () => {
    const storageRef = ref(storage, `video/${video.name}`);
    const uploadTask = uploadBytesResumable(storageRef, video);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        const progress =
          Math.round(snapShot.bytesTransferred / snapShot.totalBytes) * 100;
        setProgress(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            addDoc(collection(db, "video"), {
              title: input,
              timestamp: timestamp,
              profilePic: user.photoURL,
              username: user.displayName,
              video: url,
            });
            setProgress(0);
            setVideo("");
            setInput("");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    );
  };

  useEffect(() => {
    const q = query(collection(db, "video"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapShot) => {
      setPost(
        snapShot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    });
  }, []);

  const videos = () => {
    document.getElementById("file").click();
  };

  return (
    <div className="feed">
      <div className=" feed__video">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder=" Please Enter The Video Title for Uploading "
          value={input}
        />
        <div className="feed__buttons">
          <div className="icons">
            <VideoCallOutlined onClick={videos} />
            <Button onClick={handel}> Add Video</Button>
          </div>
        </div>
      </div>
      {progress > 0 && (
        <LinearProgress variant="determinate" value={progress} />
      )}
      <input
        type="file"
        id="file"
        onChange={(e) => setVideo(e.target.files[0])}
        style={{ display: "none" }}
      />

      <StorySlider />

      <div className="feed__collection">
        {post.map((post) => (
          <Video
            key={post.id}
            profilePic={post.data.profilePic}
            title={post.data.title}
            video={post.data.video}
            username={post.data.username}
            timestamp={post.data.timestamp}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
