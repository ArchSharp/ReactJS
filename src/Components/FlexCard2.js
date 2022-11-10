import React from 'react'

const FlexCard = ({ flexItemsArray }) => {
  return (
    <>
      <div className='flexCard'>
        {flexItemsArray.map((eachImg) => {
          return (
            <div className='card2'>
              <a
                href='https://www.mql5.com/en/market/product/87678?source=Site+Profile+Seller#description'
                target='_blank'
                rel='noreferrer'
              >
                <img src={eachImg} alt='someimages' srcset='' />
              </a>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default FlexCard
