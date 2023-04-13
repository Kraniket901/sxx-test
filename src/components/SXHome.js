import React from "react";
import Link from 'next/link'
import Image from 'next/image'
// import svg1 from '../../public/svg/play.svg'

const SXHome = () => {
  return (
    <>
      <div className="fn_cs_video">
      <Link href="/video">
        <a className="popup-youtube" href="">
          {/* <img src="/svg/play.svg" alt="" className="fn__svg" /> */}
          <img src="/svg/play.svg" alt="Play" className="fn__svg"/>
        </a>
        </Link>
      </div>
    </>
  );
};

export default SXHome;
