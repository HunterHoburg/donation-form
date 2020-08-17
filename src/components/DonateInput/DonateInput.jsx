import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

export default ({ changeValue, valueToDonate, donate }) => {
  return (
    <Form>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text className='donation-form__input-adornment'>$</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-describedby='donation-amount' value={valueToDonate} onChange={changeValue} required />
        <FormControl.Feedback aria-describedby='donation-amount-validation-error' type='invalid'>
          Donation amounts must be greater than $5.
        </FormControl.Feedback>
        <InputGroup.Append>
          <Button className='donation-form__button' variant="outline-secondary" onClick={donate}>Give Now</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};