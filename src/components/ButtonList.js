import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex ">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Mixes" />
      <Button name="Live" />
      <Button name="Trailer" />
      <Button name="Science" />
      <Button name="Reels" />
      <Button name="Songs" />
    </div>
  );
};

export default ButtonList;
