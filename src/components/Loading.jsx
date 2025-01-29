import React from 'react';
import './loading.css'
const Loading = () => {
  return (
    <div className="loading-video">
      <video src="loading.mp4" autoPlay loop muted></video>
    </div>
  );
};

export default Loading;
