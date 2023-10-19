import React from 'react'
import { features } from '../lib/constant'
import Feature from './feature'

export function Features() {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {
        features.map(feature => (
            <Feature key={feature.label} feature={feature} />
        ))
      }
    </div>
  )
}
