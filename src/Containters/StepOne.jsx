import React, { useState } from "react";
import styled from "styled-components";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { Countries } from "./StepTwo";

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

  const [selectedCounty, setSelectedCounty] = useState("");

  const handleCountyChange = (event) => {
    setSelectedCounty(event.target.value);
  };


  //Year syntax

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const startYear = 1992;
  const currentYear = new Date().getFullYear();
  const yearOptions = [];

  for (let year = currentYear; year >= startYear; year--) {
    yearOptions.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };


  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  const monthOptions = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
  ];

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  const [selectedDay, setSelectedDay] = useState(1);
  const handleDayChange = (event) => {
    setSelectedDay(parseInt(event.target.value));
  };


  return (
    <StepOneWrap>
      <h2>Step 1/2: Personal Details</h2>
      <p>Please enter the correct details in the fields displayed.</p>
      <div className="form-area">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your First Name</Form.Label>
            <Form.Control required
              type="Text"
              placeholder="Type first name"
              className="py-3"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName2">
            <Form.Label>Your Last Name</Form.Label>
            <Form.Control required
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
                    value={selectedMonth} onChange={handleMonthChange}
                  >
                    {monthOptions.map((month) => (
                      <option key={month.value} value={month.value}>
                        {month.label}
                      </option>
                   ))}
                  </Form.Select>
                </Col>
                <Col className="px-3">
                  <Form.Select
                    className="py-3"
                    aria-label="Default select example"
                    value={selectedDay} onChange={handleDayChange}
                  >
                    {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
                <Col className="px-0">
                <Form.Select
                    className="py-3"
                    aria-label="Default select example"
                    value={selectedYear} onChange={handleYearChange}
                  >
                    {yearOptions}
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
            <Form.Control required
              type="email"
              className="py-3"
              placeholder="Enter Address"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>What state do you live in?</Form.Label>
            <Form.Select
              className="py-3"
              aria-label="Default select example"
              onChange={handleCountyChange}
              value={selectedCounty}
            >
              {Countries.map((county, index) => (
                <option key={index} value={county}>
                  {county}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" placeholder="Type email" className="py-3" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUser">
            <Form.Label>Enter your preferred username</Form.Label>
            <Form.Control required type="text" placeholder="Type username" className="py-3" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUser">
            <Form.Label>What is your favourite color</Form.Label>
            <Form.Control required type="text" placeholder="Type color name" className="py-3" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" className="py-3" />
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
