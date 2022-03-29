import React from 'react';
import './button.scss';
import { IoArrowForward} from 'react-icons/io5';

const Button = () => {
  return (
  <>
    <button className='btn-arrow'>
    <IoArrowForward className='btn-icon'/>
      Explore Now
    </button>
    <svg width="200" height="120" viewbox="0 0 100 100" preserveAspectRatio="none">
    <path d="M0,0
            L120,0
            C200,50 50,75 0,100z" fill="#8aa7ca" />
    </svg>
  </>
  )
};

export default Button;
