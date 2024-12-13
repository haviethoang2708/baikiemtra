import React from 'react';

const Clip = ({ clip }) => {
  return (
    <div className="clip">
      <h2>{clip.title}</h2>
      <p>{clip.description}</p>
      <video controls>
        <source src={clip.source_clip} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Clip;