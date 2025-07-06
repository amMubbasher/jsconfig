import React from 'react'
import SignUpFormHero from './SignUpFormHero'
import PopupPerformanceDashboard from './PopupPerfomanceDashboard'
import ConnectSiteSection from './ConnectSiteSection'

function page() {
  return (
    <div>
        <SignUpFormHero/>
        <PopupPerformanceDashboard/>
        <ConnectSiteSection/>
    </div>
  )
}

export default page