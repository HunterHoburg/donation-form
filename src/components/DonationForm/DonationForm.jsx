import React, { useState, useEffect, useRef } from 'react';
import ProgressBar from '../ProgressBar';
import DonateInput from '../DonateInput';
import Card from 'react-bootstrap/Card';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import Popover from 'react-bootstrap/Popover';

export default () => {
  const tooltipTarget = useRef(null);
  // Normally, these values would be retrived from and set by an API
  const [valueToDonate, setValueToDonate] = useState(5);
  const [numberOfDonations, setNumberOfDonations] = useState(0);
  const [totalAmountDonated, setTotalAmountDonated] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTooltip(true);
    }, 2000)
  }, [totalAmountDonated]);

  const donate = () => {
    setShowTooltip(false);
    setTotalAmountDonated(totalAmountDonated + valueToDonate);
    setNumberOfDonations(numberOfDonations + 1);
  };
  const changeValue = e => {
    setValueToDonate(parseInt(e.target.value));
  };

  const formatBody = () => `Join the ${numberOfDonations} ${numberOfDonations === 1 ? 'person' : 'people'} that ${numberOfDonations === 1 ? 'has' : 'have'} already supported this project.`;
  
  return (
    <div className='donation-form'>
      <Overlay target={tooltipTarget.current} show={showTooltip} placement='top' rootClose onHide={() => {}}>
        {(props) => (
          <Popover 
            {...props}
            className='donation-form__popover'
            target={tooltipTarget.current} 
            show={showTooltip} 
            placement='top' 
            arrowProps={{
              style: {
                right: 0,
                color: '#e3ebfc'
              }
            }}
          >
            <Popover.Content>
              <b>${5000 - totalAmountDonated}</b> still needed to fund this project
            </Popover.Content>
          </Popover>
        )}
      </Overlay>
      <ProgressBar progressLevel={totalAmountDonated} ref={tooltipTarget} />
      <Card>
        <Card.Body>
          <div className='donation-form__text-container'>
            <h3 className='donation-form__header-text'>Only four days left to fund this project</h3>
            <h6 className='donation-form__body-text'>
              {numberOfDonations > 0 ? (
                formatBody()
              ) : (
                'Be the first to donate!'
              )}
            </h6>
          </div>
          <DonateInput valueToDonate={valueToDonate} changeValue={changeValue} donate={donate} />
        </Card.Body>
      </Card>
    </div>
  );
};