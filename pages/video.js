import React from "react";
import MediaComponent from "../src/components/MediaComponent";
import Feedback from "../src/components/Feedback";
import axios from "axios";
import { useState, useEffect } from "react";
import Layout from "../src/layout/Layout";

const Video = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios
      .get("/api/video")
      // .then(res => {
      //   console.log(res);
      // })
      .then(({ data }) => setVideos(data))
      // .then(() => {
      //   console.log(videos);
      // })
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      <div>
        <Layout pageTitle={"Video"}>
          <MediaComponent videos={videos} />
          <Feedback />
        </Layout>
      </div>
    </>
  );
};

export default Video;
