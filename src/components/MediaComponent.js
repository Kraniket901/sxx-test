import LikeButton from "./LikeButton";
import Sorry from "./Sorry";

function MediaComponent({ videos }) {
  // console.log(videos);
  return (
    <>
    <div className="container">
    {videos.map((items) => (
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

<div className="descc">

        
<p className="desccp">
  Attack on Titan: The Final Season Part 3 HINDI DUB | Shinnex Production | Shinnextream
</p>
{/* <Sorry/> */}
<p>
  The Final Run Looks Set To Bring About An End To The Long Conflict
  Between Paradis And Marley. This amazing epic special episode is
  brought in hindi by{" "}
  <a
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#CDCDCD", textDecoration: "none" }}
    href="https://www.instagram.com/shinnex_production/"
  >
    @shinnex_production
  </a>{" "}
  . Shinnex is an initiative taken by fans to take hindi Fan-Dubbings of
  anime to the next level. We will provide the best possible quality of
  Anime in hindi so that anime could reach the parts of country where
  English is not majorly spoken. <br />{" "}
  <i>
    "AUR AAKHIR ME BAS YEH BOLNA CHAHUNGA KI APNI BHASHA KI BAAT HI KUCH
    AUR HAI"
  </i>
  .
</p>
<p>
  <b style={{ fontSize: "21px" }}>Type : </b> TV Series
</p>
<p>
  <b style={{ fontSize: "21px" }}>Studios : </b> MAPPA
</p>
<p>
  <b style={{ fontSize: "21px" }}>Genre : </b> Action, Drama
</p>
<p>
  <b style={{ fontSize: "21px" }}>Duration : </b> 61 min
</p>
<p>
  <b style={{ fontSize: "21px" }}>Casts : </b>
  <a
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#CDCDCD",
      textDecoration: "none",
      margin: "0.5rem",
    }}
    href="https://www.instagram.com/enter_nutshell/"
  >
    @enter_nutshell{" "}
  </a>
  <a
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#CDCDCD",
      textDecoration: "none",
      margin: "0.5rem",
    }}
    href="https://www.instagram.com/bhumikavalmike/"
  >
    @bhumikavalmike{" "}
  </a>
  <a
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#CDCDCD",
      textDecoration: "none",
      margin: "0.5rem",
    }}
    href="https://www.instagram.com/gaayiika/"
  >
    @gaayiika{" "}
  </a>
  <a
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#CDCDCD",
      textDecoration: "none",
      margin: "0.5rem",
    }}
    href="https://www.instagram.com/kaumudi_voiceovers/"
  >
    @kaumudi_voiceovers{" "}
  </a>
  <a
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#CDCDCD",
      textDecoration: "none",
      margin: "0.5rem",
    }}
    href="https://www.instagram.com/narugami_kenji/"
  >
    @narugami_kenji{" "}
  </a>
  <a
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#CDCDCD",
      textDecoration: "none",
      margin: "0.5rem",
    }}
    href="https://www.instagram.com/neuro.noise/"
  >
    @neuro.noise{" "}
  </a>
  <a
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#CDCDCD",
      textDecoration: "none",
      margin: "0.5rem",
    }}
    href="https://www.instagram.com/payal_vishal/"
  >
    @payal_vishal{" "}
  </a>
  <a
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#CDCDCD",
      textDecoration: "none",
      margin: "0.5rem",
    }}
    href="https://www.instagram.com/rishirajpandeyofficial/"
  >
    @rishirajpandeyofficial{" "}
  </a>
  <a
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#CDCDCD",
      textDecoration: "none",
      margin: "0.5rem",
    }}
    href="https://www.instagram.com/akshdeep_singh_vohra/"
  >
    @akshdeep_singh_vohra{" "}
  </a>
  <a
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#CDCDCD",
      textDecoration: "none",
      margin: "0.5rem",
    }}
    href="https://www.instagram.com/rubysnita/"
  >
    @rubysnita{" "}
  </a>
  <a
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#CDCDCD",
      textDecoration: "none",
      margin: "0.5rem",
    }}
    href="https://www.instagram.com/shikhashivi/"
  >
    @shikhashivi{" "}
  </a>
  <a
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#CDCDCD",
      textDecoration: "none",
      margin: "0.5rem",
    }}
    href="https://www.instagram.com/viraj_dub/"
  >
    @viraj_dub{" "}
  </a>
  <a
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#CDCDCD",
      textDecoration: "none",
      margin: "0.5rem",
    }}
    href="https://www.instagram.com/_its_me_vaibhavi_02/"
  >
    @_its_me_vaibhavi_02{" "}
  </a>
  <a
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#CDCDCD",
      textDecoration: "none",
      margin: "0.5rem",
    }}
    href="https://www.instagram.com/introvert_banda_/"
  >
    @introvert_banda_{" "}
  </a>
  <a
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#CDCDCD",
      textDecoration: "none",
      margin: "0.5rem",
    }}
    href="https://www.instagram.com/raj_naam.toh.suna.hoga/"
  >
    @raj_naam.toh.suna.hoga{" "}
  </a>
</p>
<p>
  <b>Trailer By :</b>
  <a
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#CDCDCD",
      textDecoration: "none",
      margin: "0.5rem",
    }}
    href="https://www.instagram.com/sp4de.baka/"
  >
    @sp4de.baka{" "}
  </a>
</p>
<p>
  <b>Posters and Thumbnail By : </b>
  <a
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#CDCDCD",
      textDecoration: "none",
      margin: "0.5rem",
    }}
    href="https://www.instagram.com/mrp_network/"
  >
    @mrp_network{" "}
  </a>
</p>
<p>
  <b>Mixing and Mastering By : </b>
  <a
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#CDCDCD",
      textDecoration: "none",
      margin: "0.5rem",
    }}
    href="https://www.instagram.com/er.sam_23/"
  >
    @er.sam_23{" "}
  </a>
</p>
</div>
    </div>

    </>
  );
}

export default MediaComponent;
