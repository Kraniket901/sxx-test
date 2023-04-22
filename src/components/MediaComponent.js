import React from 'react';

function MediaComponent(props) {
  return (
      <video width="100%" height="100%" controls poster="../img/aot_thumbnail1.png">
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  );
}

export default MediaComponent;