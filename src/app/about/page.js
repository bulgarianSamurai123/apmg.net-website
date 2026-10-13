import React from 'react'
import HeroPage from '../../../components/about/HeroPage'
import Team from '../../../components/about/Team'
import SendMessage from '../../../components/UI/SendMessage'
import Values from '../../../components/about/Values'

const AboutPage = () => {
  return (
    <div>
      <HeroPage />
      <Team />
      <Values />
      <SendMessage />
    </div>
  )
}

export default AboutPage
