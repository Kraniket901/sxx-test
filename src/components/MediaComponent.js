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
       <div className="desc" style={{padding:"2rem"}}>
              <p style={{fontSize:"2rem"}}>
                Attack on Titan: The Final Season Part 3 HINDI DUB | Shinnex Production | Shinnextream
              </p>
              <p>
                Known in Japan as Shingeki no Kyojin, many years ago, the last
                remnants of humanity were forced to retreat behind the towering
                walls of a fortified city to escape the massive, man-eating
                Titans that roamed the land outside their fortress. Only the
                heroic members of the Scouting Legion dared to stray beyond the
                safety of the walls – but even those brave warriors seldom
                returned alive. Those within the city clung to the illusion of a
                peaceful existence until the day that dream was shattered, and
                their slim chance at survival was reduced to one horrifying
                choice: kill – or be devoured!
              </p>
              <p>
                <b style={{ fontSize: "20px" }}>Type :</b> TV Series
              </p>
              <p>
                <b style={{ fontSize: "20px" }}>Studios:</b> MAPPA
              </p>
              <p>
                <b style={{ fontSize: "20px" }}>Genre:</b> Action, Drama
              </p>
              <p>
                <b style={{ fontSize: "20px" }}>Duration:</b> 61 min
              </p>
            </div>
    </>
  );
}

export default MediaComponent;
