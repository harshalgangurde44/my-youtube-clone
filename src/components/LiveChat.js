import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { RandomName, getRandomSentence } from "../utils/helper";
const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: RandomName(),
          message: getRandomSentence(),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-2 p-2 border border-black w-full h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessage.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className=" w-full p-2 m-2 border border-black flex "
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "Harshal",
              message: liveMessage,
            })
          );

          setLiveMessage("");
        }}
      >
        <input
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          className="w-96"
          type="text"
          value={liveMessage}
        ></input>
        <button className="px-2 mx-2 bg-green-300">Submit</button>
      </form>
    </>
  );
};

export default LiveChat;
