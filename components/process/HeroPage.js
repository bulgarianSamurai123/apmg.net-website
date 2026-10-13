import React from 'react'
import LittleTitle from '../UI/LittleTitle'

const HeroPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <LittleTitle>Process and pricing</LittleTitle>
      <h1 className='h1Text'>Clear steps, clear prices.</h1>
      <p className='pText'>You approve scope and budget before we start.</p>
    </div>
  )
}

export default HeroPage
