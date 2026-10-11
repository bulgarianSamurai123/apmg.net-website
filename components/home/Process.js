import React from 'react'
import Section from '../UI/Section'
import LittleTitle from '../UI/LittleTitle'
import Card from '../UI/Card'

import { processHelper } from '../../helpers/helperCard'

const Process = () => {
  return (
    <Section>
        <LittleTitle>Process</LittleTitle>
        <h2 className='subHeader'>Four simple steps</h2>
        <div className="grid grid-cols-4 gap-5">
        {processHelper.map((process) => (
          <Card
            key={process.id}
            title={process.title}
            description={process.description}
            icon={process.icon}
          />
        ))}
      </div>
    </Section>
  )
}

export default Process
