import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  const vidItems=props.videos.map(video => {
    return (
          <VideoItem
              onVideoSelect={props.onVideoSelect}
              video={video}
              key={video.etag}
               />
           );
  });
  return(
    <ul className = 'col-md-4 list-group'>
      {vidItems}
    </ul>

  );
};

export default VideoList;
