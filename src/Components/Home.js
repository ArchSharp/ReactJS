import React from 'react'

function Home(props) {
  return (
    <>
      <div className='home' id='Home'>
        {' '}
        <img src={props.homeForex} alt='homeImg' />
      </div>
    </>
  )
}
export default Home
