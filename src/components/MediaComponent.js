import LikeButton from "./LikeButton";
function MediaComponent({ videos }) {
  // console.log(videos);
  return (
    <>
      {videos.map(items => (
        <div key={items.id}>
          <div style={{ paddingTop: "56%", position: "relative" }}>
            <iframe
              src={items.url}
              // src="https://player.vdocipher.com/v2/?otp=20160313versASE3233gq0zTF2QNuVI04X12KzPLJfBSKKSVzgF7dKm23dwQAljF&playbackInfo=eyJ2aWRlb0lkIjoiYTA2ZDllOGUzYzhjNGVmYWI1MGNjN2MxNmMwODY0YzUifQ==&player=D3NxxdAtIkYztSFe"
              style={{
                border: "0",
                maxWidth: "100%",
                position: "absolute",
                top: "0",
                left: "0",
                height: "100%",
                width: "100%",
              }}
              allowFullScreen="true"
              allow="encrypted-media"
            ></iframe>
          </div>
          <LikeButton vidId={items.id} />
        </div>
      ))}
    </>
  );
}

export default MediaComponent;
