import React from "react";
import styled from "styled-components";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

const StepTwoWrap = styled.div`
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

const Business = () => {
  return (
    <StepTwoWrap>
      <h2>Step 2/2: Business Details</h2>
      <p>Please enter the correct details in the fields displayed.</p>
      <div className="form-area">
        <Form>
          <Form.Group className="mb-3" controlId="formBizName">
            <Form.Label>Your business name</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Type business name"
              className="py-3"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBizName2">
            <Form.Label>What is your business about?</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Type business description"
              className="py-3"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBizName3">
            <Form.Label>Your business address</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Type business address"
              className="py-3"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBizAdd">
            <Form.Label>What state is your business in?</Form.Label>
            <Form.Select className="py-3" aria-label="Default select example">
              <option>Select State</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBizAdd">
            <Form.Label>What state is your business in?</Form.Label>
            <Form.Select className="py-3" aria-label="Default select example">
              <option>How old is your business?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Is your business registered?</Form.Label>
            <Form.Check className="mb-2" type="radio" label="Yes, it is" />
            <Form.Check className="mb-2" type="radio" label="No, it is not" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBizName">
            <Form.Label>How much do you need?</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Amount"
              className="py-3"
            />
          </Form.Group>

          <Form.Group className="mb-3 py-0" controlId="formBasicDate">
            <Form.Label>When do you need the funds</Form.Label>
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

          <Form.Group className="mb-3" controlId="formBasicPass">
            <Form.Label>What other support do you need from us?</Form.Label>
            <Form.Check
              className="mb-2"
              type="Checkbox"
              label="Business advise"
            />
            <Form.Check className="mb-2" type="Checkbox" label="Marketing" />
            <Form.Check className="mb-2" type="Checkbox" label="Partnership" />
            <Form.Check className="mb-2" type="Checkbox" label="Sponsorship" />
            <Form.Check
              className="mb-2"
              type="Checkbox"
              label="Business Registration"
            />
          </Form.Group>

          <Container>
            <Row>
              <Col className="mt-2" md={12}>
                <p>
                  turn on your notification for request approval to know when we
                  have approved your application.
                </p>
              </Col>
              <Col md={12} className="mt-2">
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Approval notification"
                  variant="dark"
                />
              </Col>
            </Row>
          </Container>

          <Button variant="dark" className="mt-4 px-4 py-3" href="/submitted" type="submit">
            Submit Application
          </Button>
        </Form>
      </div>
    </StepTwoWrap>
  );
};

export default Business;
