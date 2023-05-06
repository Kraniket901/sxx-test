import React from 'react'
import MediaComponent from '../src/components/MediaComponent'
import Header from '../src/layout/Header'
import Footer from '../src/layout/Footer'
import SXAboutAOT from '../src/components/SXAboutAOT'
import MobileNavigation from '../src/layout/MobileNavigation'
import Navigation from '../src/layout/Navigation'
import SearchButton from '../src/layout/SearchButton'
import PreLoader from '../src/layout/PreLoader'
import ScrollTop from '../src/layout/ScrollTop'
import WalletPopUp from '../src/layout/WalletPopUp'
import LikeButton from '../src/components/LikeButton'
import SXUpcomingPoll from '../src/components/SXUpcomingPoll'
import Feedback from '../src/components/Feedback'

const video = () => {
  return (
    <>
    <div>
      <Navigation/>
      <MobileNavigation/>
      <Header/>
      <MediaComponent/>
      {/* <SXAboutAOT/> */}
      {/* <LikeButton/> */}
      <Feedback/>
      {/* <SXUpcomingPoll/> */}
      <Footer/>
      <SearchButton/>
      <PreLoader/>
      {/* <ScrollTop/> */}
      <WalletPopUp/>
    </div>
    </>
  )
}

export default video