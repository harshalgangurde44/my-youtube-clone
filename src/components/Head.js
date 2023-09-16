import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { cacheResults } from "../utils/searchSlice";
import { GOOGLE_API_KEY } from "../utils/contants";
import { YOUTUBE_API } from "../utils/contants";
import { setVideos } from "../utils/videoSlice";
import { query_fill } from "../utils/searchBox_Slice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSuggestions(json[1]);
    console.log(searchQuery);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getVideosByQuery = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&key=${GOOGLE_API_KEY}&q=${searchQuery}`
      );
      const data = await response.json();
      dispatch(setVideos(data.items));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSuggestClick = (s) => {
    setShowSuggestions(false);
    dispatch(query_fill(s));
    setSearchQuery(s);
  };

  const handleLiveChat_enter = (e) => {
    if (e.key === "Enter") {
      // console.log("hey lol-2");
      handleSuggestClick(searchQuery);
    }
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg  ">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="  h-12 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <a href="/">
          <img
            className="  h-12 "
            alt="youtube"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={handleLiveChat_enter}
            // onBlur={() => setShowSuggestions(false)}
            className="w-1/2 p-2  border border-gray-400 rounded-l-full"
            type="text "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className=" p-2 mt-1 border border-gray-400 rounded-r-full"
            onClick={getVideosByQuery}
          >
            Search
          </button>
        </div>
        {/* absolute left-[40px] right-0 top-[71px] bg-white py-2 px-2 w-[31rem] shadow-lg rounded-lg border border-gray-100 */}
        {showSuggestions && (
          <div className="absolute bg-white w-1/3">
            <ul>
              {suggestions.map((s) => (
                <li
                  onClick={() => handleSuggestClick(s)}
                  className="px-2 py-2 hover:bg-gray-100"
                  key={s}
                >
                  {" 🔎 " + s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="  h-12"
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
          alt="user-logo"
        />
      </div>
    </div>
  );
};

export default Head;
