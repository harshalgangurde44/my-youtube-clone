import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/contants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";
import { setVideos } from "../utils/videoSlice";
import { useDispatch, useSelector } from "react-redux";

const VideoContainer = () => {
  const videos = useSelector((store) => store.videos.list);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    // console.log(json);
    dispatch(setVideos(json.items));
  };

  return (
    <div className="flex flex-wrap mx-auto">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + (video.id.videoId || video.id)}>
          <VideoCards info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
