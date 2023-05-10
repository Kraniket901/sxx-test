import React from "react";
import MediaComponent from "../src/components/MediaComponent";
import Header from "../src/layout/Header";
import Footer from "../src/layout/Footer";
import MobileNavigation from "../src/layout/MobileNavigation";
import Navigation from "../src/layout/Navigation";
import SearchButton from "../src/layout/SearchButton";
import PreLoader from "../src/layout/PreLoader";
import WalletPopUp from "../src/layout/WalletPopUp";
import Feedback from "../src/components/Feedback";
import axios from "axios";
import { useState, useEffect } from "react";
import Social from "./Social";
import Searchbox from "./Searchbox";
import SearchButton from "./SearchButton";

const Video = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios
      .get("/api/video")
      // .then(res => res.json())
      .then(({ data }) => setVideos(data))
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      <div>
        <Navigation />
        <MobileNavigation />
        <Header />
        <MediaComponent videos={videos} />
        <Feedback />
        {/* <SXUpcomingPoll/> */}
        <Footer />
        <SearchButton />
        <PreLoader />
        <Social/>
        <SearchButton/>
        <Searchbox/>
        {/* <ScrollTop/> */}
        <WalletPopUp />
      </div>
    </>
  );
};

export default Video;
