import React from 'react'

const FlexCard = ({ flexItemsArray, range }) => {
  return (
    <>
      <div className='flexCard fade'>
        {flexItemsArray.map((eachImg, index) => {
          console.log('range ', range)
          return (
            <>
              {((range === 3 && index < 3) ||
                (range !== 3 &&
                  range > 3 &&
                  index >= range - 3 &&
                  index < range)) && (
                <div className='card2'>
                  <a
                    href='https://www.mql5.com/en/market/product/87678?source=Site+Profile+Seller#description'
                    target='_blank'
                    rel='noreferrer'
                    key={index}
                  >
                    <img src={eachImg} alt='someimages' srcset='' />
                  </a>
                </div>
              )}
            </>
          )
        })}
      </div>
    </>
  )
}

export default FlexCard
