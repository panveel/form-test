import React from "react";
import styled from "styled-components";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

const StepOneWrap = styled.div`
  padding: 30px;
  color: #000;

  h2 {
    font-weight: 700;
    font-size: 26px;
  }

  button, a {
    width: 100%;
  }
`;

const Personal = () => {
  return (
    <StepOneWrap>
      <h2>Step 1/2: Personal Details</h2>
      <p>Please enter the correct details in the fields displayed.</p>
      <div className="form-area">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your First Name</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Type first name"
              className="py-3"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName2">
            <Form.Label>Your Last Name</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Type last name"
              className="py-3"
            />
          </Form.Group>

          <Form.Group className="mb-3 py-0" controlId="formBasicDate">
            <Form.Label>Your date of birth</Form.Label>
            <Container fluid>
              <Row>
                <Col className="px-0">
                  <Form.Select
                    className="py-3"
                    aria-label="Default select example"
                  >
                    <option>Month</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col className="px-3">
                  <Form.Select
                    className="py-3"
                    aria-label="Default select example"
                  >
                    <option>Day</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col className="px-0">
                  <Form.Select
                    className="py-3"
                    aria-label="Default select example"
                  >
                    <option>Year</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Row>
            </Container>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Select your gender</Form.Label>
            <Form.Check className="mb-2" type="radio" label="Male" />
            <Form.Check className="mb-2" type="radio" label="Female" />
            <Form.Check className="mb-2" type="radio" label="Non-Binary" />
            <Form.Check
              className="mb-2"
              type="radio"
              label="Prefer not to say"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAdsress">
            <Form.Label>Your home address</Form.Label>
            <Form.Control
              type="email"
              className="py-3"
              placeholder="Enter Address"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>What state do you live in?</Form.Label>
            <Form.Select className="py-3" aria-label="Default select example">
              <option>Select State</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Type email" className="py-3" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUser">
            <Form.Label>Enter your preferred username</Form.Label>
            <Form.Control type="text" placeholder="Type username" className="py-3" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUser">
            <Form.Label>What is your favourite color</Form.Label>
            <Form.Control type="text" placeholder="Type color name" className="py-3" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" className="py-3" />
            <Form.Text className="text-muted">
            At least 6 characters with letters, numbers & signs
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPass">
            <Form.Label>Select your gender</Form.Label>
            <Form.Check className="mb-2" type="Checkbox" label="6 Characters" />
            <Form.Check className="mb-2" type="Checkbox" label="Letters" />
            <Form.Check className="mb-2" type="Checkbox" label="Numbers" />
            <Form.Check
              className="mb-2"
              type="Checkbox"
              label="Symbols"
            />
          </Form.Group>

          <Button variant="dark"  className="mt-4 px-4 py-3" type="submit" href="/business" >
            Proceed to next step
          </Button>
        </Form>
      </div>
    </StepOneWrap>
  );
};

export default Personal;
