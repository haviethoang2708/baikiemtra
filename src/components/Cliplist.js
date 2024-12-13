import React, { useEffect, useState } from 'react';
import Clip from '../components/pages/Clip';
import clipsData from "./../myclip.json"
import "./Myclip.css";


const ClipList = () => {
  const [clips, setClips] = useState([]);

  useEffect(() => {
    setClips(clipsData);
  }, []);

  return (
    <div className="clip-list">
      {clips.map((clip, index) => (
        <Clip key={index} clip={clip} />
      ))}
    </div>
  );
};

export default ClipList;