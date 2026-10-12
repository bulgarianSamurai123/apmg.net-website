import React from 'react'
import Section from '../UI/Section'
import Card from "../UI/Card";
import LittleTitle from '../UI/LittleTitle'

import { weBuildHelper } from "../../helpers/helperCard.js";

const WeDo = () => {
  return (
    <Section>
        <LittleTitle>Offer</LittleTitle>
        <h2 className='h2Text'>What we do</h2>
        <div className="grid grid-cols-4 gap-5">
        {weBuildHelper.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </Section>
  )
}

export default WeDo
