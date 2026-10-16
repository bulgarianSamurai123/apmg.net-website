import React from 'react'
import LittleTitle from '../UI/LittleTitle'

const HeroPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <LittleTitle>Contact</LittleTitle>
      <h1 className='h1Text'>Tell us about your project.</h1>
      <p className='pText'>Use the form or email [YOUR EMAIL].</p>
    </div>
  )
}

export default HeroPage
