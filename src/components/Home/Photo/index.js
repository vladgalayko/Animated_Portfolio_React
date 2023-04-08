import React from 'react'
import Avatar from '../../../assets/images/photo1.png'

import './index.scss';

const Photo = () => {
  return (
    <div className='photo-wrapper'>
      <img src={Avatar} className='photo-wrapper-img'/>
    </div>
  )
}

export default Photo
