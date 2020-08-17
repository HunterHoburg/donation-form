import React, { useState, useEffect, useRef } from 'react';
import ProgressBar from '../ProgressBar';
import DonateButton from '../DonateInput';
import Card from 'react-bootstrap/Card'
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'

export default () => {
  // Normally, these values would be retrived from and set by an API
  const [valueToDonate, setValueToDonate] = useState(5);
  const [numberOfDonations, setNumberOfDonations] = useState(0);
  const [totalAmountDonated, setTotalAmountDonated] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipTarget = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setShowTooltip(true);
      console.log('tooltip', showTooltip);
    }, 2000)
  }, [totalAmountDonated]);

  const donate = () => {
    setShowTooltip(false);
    setTotalAmountDonated(totalAmountDonated + valueToDonate);
    console.log('numberr of donations', numberOfDonations);
    setNumberOfDonations(numberOfDonations + 1);
  };
  const changeValue = e => {
    setValueToDonate(parseInt(e.target.value));
  };

  const formatBody = () => `Join the ${numberOfDonations} ${numberOfDonations === 1 ? 'person' : 'people'} that ${numberOfDonations === 1 ? 'has' : 'have'} already supported this project.`;

  return (
    <>
      <Overlay target={tooltipTarget.current} show={showTooltip} placement='top'>
        {() => (
          <Tooltip id='overlay-example'>
            {`We need $${5000 - totalAmountDonated} more!`}
          </Tooltip>
        )}
      </Overlay>
      <ProgressBar progressLevel={totalAmountDonated} ref={tooltipTarget} />
      <Card>
        <Card.Body>
          <div className='text-container'>
            <h2 className='header-text'>Only four days left to fund this project</h2>
            {numberOfDonations > 0 ? (
              <h5>{formatBody()}</h5>
            ) : (
              <h5>Be the first to donate!</h5>
            )}
          </div>
          <DonateButton valueToDonate={valueToDonate} changeValue={changeValue} donate={donate} />
        </Card.Body>
      </Card>
    </>
  );
};