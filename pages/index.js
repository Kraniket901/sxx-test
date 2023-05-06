import About from "../src/components/About";
import Collection from "../src/components/Collection";
import Contact from "../src/components/SXContact";
import FunFacts from "../src/components/FunFacts";
import HeroSlider from "../src/components/SXVoiceArtist";
import RoadMapSlider from "../src/components/SXUpcomingProject.js";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
import TopDiv from "../src/components/SXDesc";
import News from "../src/components/News";
import InfiniteCr from "../src/components/InfiniteCr";
import InfiniteCr2 from "../src/components/InfiniteCr2";
import MediaComponent from "../src/components/MediaComponent";
import SXVideoDesc from "../src/components/SXVideoDesc";
import SXAboutAOT from "../src/components/SXAboutAOT";
import SXUpcomingProject from "../src/components/SXUpcomingProject";
import SXPoll from "../src/components/SXPoll";
import SXDesc from "../src/components/SXDesc";
import SXVoiceArtist from "../src/components/SXVoiceArtist";
import SXContact from "../src/components/SXContact";
import SXHome from "../src/components/SXHome";
import Payment from "../src/components/Payment";
import Donation from "../src/components/Donation";
const Index = () => {
  return (
    
    <Layout pageTitle={"Home"}>
      
      <SXHome/>
      
      <InfiniteCr/>
      <SectionDivider/>
      <SXVideoDesc/>
      <SXAboutAOT/>
      <SXUpcomingProject/>
      <SectionDivider/>
      {/* <SXPoll/> */}
      {/* <SectionDivider/> */}
      <SXDesc/>
      <SXVoiceArtist/>
      <SectionDivider/>
      <InfiniteCr2/>
      <SectionDivider/>
      <Donation/>
      <SectionDivider/>
      <Collection/>
      <SectionDivider/>
      <SXContact/>
    </Layout>
  );
};
export default Index;
