import React from 'react'
import LittleTitle from '../UI/LittleTitle'

const HeroPage = () => {
  return (
    <div className="flex flex-col gap-3">
        <LittleTitle>About APMG.NET</LittleTitle>
        <h1 className='h1Text'>A small team that ships.</h1>
        <p className='pText'>[YOUR STORY: who you are, why you started AMPG.NET]</p>
    </div>
  )
}

export default HeroPage
