import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

export default React.forwardRef(({ progressLevel }, ref) => {
  console.log('ref', ref);
  return (
    <ProgressBar now={progressLevel} max={5000} min={0} variant='info' label={progressLevel} ref={ref} />
  )
});
