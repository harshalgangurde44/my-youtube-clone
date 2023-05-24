import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex px-2 items-center  ">
      <img
        className="  h-7 rounded-full  "
        src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        alt="user-logo"
      />
      <span className="font-bold px-2 ">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
