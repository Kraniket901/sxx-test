import React from "react";
import Link from "next/link";
import Image from "next/image";
// import svg1 from '../../public/svg/play.svg'

const SXHome = () => {
  const handleView = async () => {
    await fetch("/api/video", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).catch(err => {
      // catch them errors
      console.log(err);
    });
  };
  return (
    <>
      <div className="fn_cs_video">
        <Link href="/video">
          <button onClick={() => handleView()}>
            <a className="popup-youtube" href="">
              {/* <img src="/svg/play.svg" alt="" className="fn__svg" /> */}
              <img src="/svg/play.svg" alt="Play" className="fn__svg" />
            </a>
          </button>
        </Link>
      </div>
    </>
  );
};

export default SXHome;
