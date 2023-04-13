import React from 'react'
import MediaComponent from '../src/components/MediaComponent'
import Header from '../src/layout/Header'
import Footer from '../src/layout/Footer'
import SXAboutAOT from '../src/components/SXAboutAOT'
import MobileNavigation from '../src/layout/MobileNavigation'

const video = () => {
  return (
    <>
    <div>
    <MobileNavigation/>
    <Header/>
    <MediaComponent/>
    <SXAboutAOT/>
    <Footer/>
    </div>

    </>
  )
}

export default video