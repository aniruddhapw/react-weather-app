import React from "react";

const VideoBackground = () => {
  const videoId = "x7SQaDTSrVg"; // replace with a YouTube video ID
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&autohide=1&disablekb=1`;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -10,
      }}
    >
      <iframe
        style={{ width: "100%", height: "100%", border: "0" }}
        src={videoUrl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  );
};

export default VideoBackground;

{
  /* <iframe
  width="1019"
  height="573"
  src="https://www.youtube.com/embed/LSRNmhLS76o"
  title="How to Create a Video Background Component in React JS - With a Background Overlay"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>; */
}
{
  /* <iframe
  width="1019"
  height="573"
  src="https://www.youtube.com/embed/x7SQaDTSrVg"
  title="Rain On Window with Thunder Sounds - Rain in Forest at Night - 10 Hours"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>; */
}
