import React from "react";

const VideoCards = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" alt="video" src={thumbnails.medium.url} />

      <ul>
        <li className="font-bold py-1 line-clamp-2 ">{title}</li>
        <li className="line-clamp-1">{channelTitle}</li>
      </ul>
    </div>
  );
};

export default VideoCards;
