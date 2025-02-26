import React from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import playIcon from "../assets/play.png";


const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-7xl font-bold"> {title}</h1>
      <p className="w-1/2 py-6 text-lg">{overview}</p>
      <div className="flex items-center gap-5">
        <button className="bg-white-button hover:bg-zinc-200 text-black px-8 font-semibold text-2xl py-3 rounded flex items-center gap-3"><img src={playIcon} alt="" className="w-7 h-7  object-contain "/> Play</button>
        <button className="bg-info-button bg-opacity-40 hover:bg-opacity-55 p-4 py-3 px-8 text-2xl text-center rounded flex items-center gap-2"> <InfoCircleOutlined className="flex w-7 h-7 object-contain"/> More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
