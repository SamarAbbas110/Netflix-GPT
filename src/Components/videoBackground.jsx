import {useSelector } from "react-redux";
import useTrailers from "../customHooks/useTraiiler";
const VideoBackground = ({ movieID }) => {
 
  const trailerStateVideo = useSelector(
    (state) => state.movies?.nowPlayingTrailers
  ); // Get the first trailer from the now playing trailers list which is store in Redux Store

  useTrailers(movieID); // call the useTrailers custom hook to fetch trailers  

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerStateVideo?.key + "/?&autoplay=1&mute=1"}
        title="YouTube video player"
        
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
