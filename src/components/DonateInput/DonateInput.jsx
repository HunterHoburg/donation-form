import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default ({ changeValue, valueToDonate, donate }) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text>$</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl aria-describedby="basic-addon1" value={valueToDonate} onChange={changeValue} />
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={donate}>Donate!</Button>
      </InputGroup.Append>
    </InputGroup>
  );
};