import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

export default React.forwardRef(({ progressLevel }, ref) => {
  return (
    <ProgressBar
      className='donation-form__progress-bar' 
      now={progressLevel} 
      max={5000} 
      min={0}
      label={progressLevel}
      srOnly
      ref={ref} 
    />
  )
});
