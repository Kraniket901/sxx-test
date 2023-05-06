import React from 'react';

function MediaComponent(props) {
  return (
      // <video controlsList="nodownload"  width="100%" height="100%" controls poster="../img/aot_thumbnail1.png">
      //   <source src="../vid/trailer.mp4" type="video/mp4" />
      //   Your browser does not support the video tag.
      // </video>
      <div style={{paddingTop:"56%",position:"relative"}}>
<iframe src="https://player.vdocipher.com/v2/?otp=20160313versASE3233gq0zTF2QNuVI04X12KzPLJfBSKKSVzgF7dKm23dwQAljF&playbackInfo=eyJ2aWRlb0lkIjoiYTA2ZDllOGUzYzhjNGVmYWI1MGNjN2MxNmMwODY0YzUifQ==" style={{border:"0",maxWidth:"100%",position:"absolute",top:"0",left:"0",height:"100%",width:"100%"}} allowFullScreen="true" allow="encrypted-media"></iframe>
</div>
  );
}

export default MediaComponent;