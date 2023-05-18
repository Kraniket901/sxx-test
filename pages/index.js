import Collection from "../src/components/Collection";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
import InfiniteCr from "../src/components/InfiniteCr";
import InfiniteCr2 from "../src/components/InfiniteCr2";
import SXVideoDesc from "../src/components/SXVideoDesc";
import SXAboutAOT from "../src/components/SXAboutAOT";
import SXUpcomingProject from "../src/components/SXUpcomingProject";
import SXUpcomingPoll from "../src/components/SXUpcomingPoll";
import SXDesc from "../src/components/SXDesc";
import SXVoiceArtist from "../src/components/SXVoiceArtist";
import SXContact from "../src/components/SXContact";
import SXHome from "../src/components/SXHome";
import Donation from "../src/components/Donation";
import SXAOTTwo from "../src/components/SXAOTTwo";
import Sorry from "../src/components/Sorry";
import Trailer from "../src/components/Trailer";
const Index = () => {
  return (
    
    <Layout pageTitle={"Home"}>
      
      <SXHome/>
      {/* <Sorry/> */}
      <InfiniteCr/>
      <SectionDivider/>
      <SXVideoDesc/>
      <Trailer/>
      <SXAboutAOT/>
      <SectionDivider/>
      <SXDesc/>
      <SXVoiceArtist/>
      <SXAOTTwo/>
      {/* <SXUpcomingProject/> */}
      {/* <SXUpcomingPoll/> */}
      <SectionDivider/>
      <Donation/>
      <SectionDivider/>
      <Collection/>
      <SectionDivider/>
      <InfiniteCr2/>
      <SectionDivider/>
      <SXContact/>
    </Layout>
  );
};
export default Index;
