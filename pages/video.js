import React from "react";
import MediaComponent from "../src/components/MediaComponent";
import Header from "../src/layout/Header";
import Footer from "../src/layout/Footer";
import ScrollTop from "../src/layout/ScrollTop";
import MobileNavigation from "../src/layout/MobileNavigation";
import Navigation from "../src/layout/Navigation";
import PreLoader from "../src/layout/PreLoader";
import WalletPopUp from "../src/layout/WalletPopUp";
import Feedback from "../src/components/Feedback";
import axios from "axios";
import { useState, useEffect } from "react";
import Social from "../src/layout/Social";
import SearchButton from "../src/layout/SearchButton";
import Searchbox from "../src/layout/Searchbox";
import Layout from "../src/layout/Layout";

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
      <Layout pageTitle={"Video"}>
       
        {/* <Navigation /> */}
        {/* <MobileNavigation /> */}
        {/* <Header /> */}
        <MediaComponent videos={videos} />
        <Feedback />
        {/* <SXUpcomingPoll/> */}
        {/* <Footer /> */}
        {/* <SearchButton /> */}
        {/* <PreLoader /> */}
        {/* <WalletPopUp /> */}
        </Layout>
      </div>
    </>
  );
};

export default Video;
