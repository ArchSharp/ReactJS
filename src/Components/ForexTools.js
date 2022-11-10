import React from 'react'
import { useState } from 'react'
import CenteredHeadingUnderline from './CenteredHeadingUnderline'
import FlexCard from './FlexCard2'
import { forexTools } from '../Datas/forexTool'

const ForexTools = () => {
  const [imageRange, setImageRange] = useState(3)

  const slidePrev = () => {
    if (imageRange > 3) {
      setImageRange((prevState) => {
        return prevState - 3
      })
    }
  }
  const slideNext = () => {
    if (imageRange >= 3 && imageRange < forexTools.length) {
      setImageRange((prevState) => {
        return prevState + 3
      })
    }
  }

  let prev = '<',
    next = '>'
  return (
    <div>
      <CenteredHeadingUnderline title={'Forex Tools'} />
      <FlexCard flexItemsArray={forexTools} range={imageRange} />
      <div className='btns'>
        <button type='button' className='sliderBtn' onClick={slidePrev}>
          {prev}
        </button>
        <button type='button' className='sliderBtn' onClick={slideNext}>
          {next}
        </button>
      </div>
    </div>
  )
}

export default ForexTools
