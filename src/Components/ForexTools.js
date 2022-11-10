import React from 'react'
import CenteredHeadingUnderline from './CenteredHeadingUnderline'
import FlexCard from './FlexCard2'
import { forexTools } from '../Datas/forexTool'

const ForexTools = () => {
  let prev = '<',
    next = '>'
  return (
    <div>
      <CenteredHeadingUnderline title={'Forex Tools'} />
      <FlexCard flexItemsArray={forexTools} />
      <div className='btns'>
        <button type='button' className='sliderBtn'>
          {prev}
        </button>
        <button type='button' className='sliderBtn'>
          {next}
        </button>
      </div>
    </div>
  )
}

export default ForexTools
