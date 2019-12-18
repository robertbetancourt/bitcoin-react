import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap';

export default function FormSearch(props) {
    const [validated, setValidated] = useState(false);
    let [coin, setCoin] = useState();
    let [cryto, setCryto] = useState();
    let [typeLG, setTypeLG] = useState();

    const handleSubmit = event => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
     if (form.checkValidity() === true) {
      event.preventDefault();
      const inputs = {coin, cryto, typeLG}
      setValidated(true);
      console.log('no if');
      
      props.data(inputs)
     }
     setValidated(true);
    };
  
    return (
      <div className="mt-4 container">
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="">
        <Form.Row>
          <Form.Group as={Col} xs="12" md="4"
          controlId="validationCustom01">
            <Form.Control
              required
              type="text"
              placeholder="Type of Coin"
              onChange={(event) => {setCoin(coin = event.target.value.toUpperCase().trim())}}
            />
            <Form.Control.Feedback type="invalid">
              Please type a valid value, like EUR.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="12" md="4"  controlId="validationCustom02">
            <Form.Control
              required
              type="text"
              placeholder="Type the Cryptocurrency"
              onChange={(event) => {setCryto(cryto = event.target.value.toUpperCase().trim())}}
            />
            <Form.Control.Feedback type="invalid">
            Please type a valid value, like LTC.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="12" md="4"controlId="validationCustomUsername">
          <Form.Control as="select" onChange={(event) => {setTypeLG(typeLG = event.target.value)}}>
            <option>Local</option>
            <option>Global</option>
            </Form.Control>
          </Form.Group>
         <Button type="submit" className="btn btn-block" xs="12" md="4" lg="4" >Submit form</Button>
        </Form.Row>
       </Form>
      </div>
    );
}


  