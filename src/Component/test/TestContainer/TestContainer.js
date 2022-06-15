import React from 'react'
import { BBtext } from '../../BBtext/BBtext'
import { Test } from '../Test'
import './testContainer.css'
export const TestContainer = () => {
  return (
    <div className='toTest' > 
      <div className='testContainer'>
        <div className='bbText'><BBtext /></div>
        <div className='testWrapper'><Test /></div>
      </div>
    </div>
  )
}
