import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useLocation } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  const videoId = searchParams.get("v");

  if (!videoId) {
    return <div>No video ID found</div>;
  }

  return (
    <div>
      <div className="px-5">
        <iframe
          width="1100"
          height="600"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="EXTRACTION 2 | Official Hindi Trailer | Netflix India"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
