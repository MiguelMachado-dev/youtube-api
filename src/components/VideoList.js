/* eslint-disable react/prop-types */
import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  // Pega a lista de VIDEOS do array do state e para cada VÍDEO nessa lista, renderiza o
  // componente VideoItem passando a prop desse video em particular
  //                               \/
  const renderedList = videos.map(video => (
    <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
  ));
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
