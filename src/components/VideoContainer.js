import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/contants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";
import { setVideos } from "../utils/videoSlice";
import { useDispatch, useSelector } from "react-redux";
import { GOOGLE_API_KEY } from "../utils/contants";

const VideoContainer = () => {
  const videos = useSelector((store) => store.videos.list);
  const dispatch = useDispatch();
  const toggleSidebar = useSelector((s) => s.app.isMenuOpen);
  const checkQuery = useSelector((store) => store.searchbox.searchString);
  useEffect(() => {
    if (checkQuery !== "") {
      getVideosByQuery(checkQuery);
    } else {
      getVideos();
    }
  }, [checkQuery]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    // console.log(json);
    dispatch(setVideos(json.items));
  };

  const getVideosByQuery = async (checkQuery) => {
    try {
      const response = await fetch(
        `https://harshal-gangurde-cors-anywhere.onrender.com/https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&key=${GOOGLE_API_KEY}&q=${checkQuery}`
      );
      const data = await response.json();
      dispatch(setVideos(data.items));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div
      // className="flex flex-wrap mx-auto"
      className={` flex  gap-1 ${
        toggleSidebar ? " flex-wrap " : " flex-wrap justify-center mx-auto"
      } `}
    >
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + (video.id.videoId || video.id)}>
          <VideoCards info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
