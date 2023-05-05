import React from 'react';

function MediaComponent(props) {
  return (
      <video controlsList="nodownload"  width="100%" height="100%" controls poster="../img/aot_thumbnail1.png">
        <source src="../vid/trailer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  );
}

export default MediaComponent;