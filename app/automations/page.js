import React from 'react'
import PrebuiltAutomations from './PrebuiltAutomations'
import WelcomeAutomationBanner from './WelcomeAutomationBanner'
import RecommendedAutomations from './RecommendedAutomations'
import AutomationFlowsComponent from './AutomationFlowsComponent'
import HelpResourcesSection from './HelpResourcesSection'
import WonderTestimonial from './WonderTestimonial'
import Header from './Header'
function page() {
  return (
    <div className=''>
        <Header/>
        <WelcomeAutomationBanner/>
        <RecommendedAutomations/>
        <AutomationFlowsComponent/>
        <HelpResourcesSection/>
        <WonderTestimonial/>
    </div>
  )
}

export default page