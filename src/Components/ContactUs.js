import React from 'react'
import CenteredHeadingUnderline from './CenteredHeadingUnderline'
import Lists from '../Components/Lists'

var contactHandles = [
  <a
    href='https://web.facebook.com/raphael.tunji2/'
    target='_blank'
    rel='noreferrer'
  >
    Facebook
  </a>,
  <a href='https://twitter.com/ArchIntel1' target='_blank' rel='noreferrer'>
    Twitter
  </a>,
  <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
    Instagram
  </a>,
  <a
    href='http://www.terawork.com/home/archraphael'
    target='_blank'
    rel='noreferrer'
  >
    TeraWork
  </a>,
  <a
    href='#https://www.linkedin.com/in/raphael-tunji-34a1073a/'
    target='_blank'
    rel='noreferrer'
  >
    LinkedIn
  </a>,
  <a
    href='https://www.mql5.com/en/users/archraphael'
    target='_blank'
    rel='noreferrer'
  >
    MQL5
  </a>,
]

const ContactUs = () => {
  return (
    <div>
      <CenteredHeadingUnderline title={'Contact Us'} />
      <div className='contactUs'>
        <div className='ctList'>
          <Lists listArray={contactHandles} />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
