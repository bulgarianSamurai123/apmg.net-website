import React from 'react'
import HeroPage from '../../../components/process/HeroPage'
import WeWork from '../../../components/process/WeWork'
import Pricing from '../../../components/process/Pricing'
import SendMessage from '../../../components/UI/SendMessage'
import Faq from '../../../components/process/Faq'

const ProcessPage = () => {
  return (
    <div>
      <HeroPage />
      <WeWork />
      <Pricing />
      <Faq />
      <SendMessage />
    </div>
  )
}

export default ProcessPage
