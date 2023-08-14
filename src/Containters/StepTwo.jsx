import React, { useState } from "react";
import styled from "styled-components";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

const StepTwoWrap = styled.div`
  padding: 30px;
  color: #000;

  h2 {
    font-weight: 700;
    font-size: 26px;
  }

  button,
  a {
    width: 100%;
  }
`;

export const Countries = [
  "Bedfordshire",
  "Berkshire",
  "Bristol",
  "Buckinghamshire",
  "Cambridgeshire",
  "Cheshire",
  "City of London",
  "Cornwall",
  "County Durham",
  "Cumbria",
  "Derbyshire",
  "Devon",
  "Dorset",
  "East Riding of Yorkshire",
  "East Sussex",
  "Essex",
  "Gloucestershire",
  "Greater London",
  "Greater Manchester",
  "Hampshire",
  "Herefordshire",
  "Hertfordshire",
  "Isle of Wight",
  "Kent",
  "Lancashire",
  "Leicestershire",
  "Lincolnshire",
  "Lincolnshire (North and North East)",
  "Merseyside",
  "Norfolk",
  "North Yorkshire",
  "North Yorkshire",
  "Northamptonshire",
  "Northumberland",
  "Nottinghamshire",
  "Oxfordshire",
  "Rutland",
  "Shropshire",
  "Somerset",
  "South Yorkshire",
  "Staffordshire",
  "Suffolk",
  "Surrey",
  "Tyne and Wear",
  "Warwickshire",
  "West Midlands",
  "West Sussex",
  "West Yorkshire",
  "Wiltshire",
  "Worcestershire",
];



const Business = () => {
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

          <Form.Group className="mb-3" controlId="formBizAdd">
            <Form.Label>How old is your business?</Form.Label>
            <Form.Select className="py-3" aria-label="Default select example">
              <option>select anwser</option>
              <option value="1 year or less">1 year or less</option>
              <option value="More than 1 year but less than 3 years">
                More than 1 year but less than 3 years
              </option>
              <option value="3 years to 5 years">3 years to 5 years</option>
              <option value="More than 5 years">More than 5 years</option>
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

          <Button
            variant="dark"
            className="mt-4 px-4 py-3"
            href="/submitted"
            type="submit"
          >
            Submit Application
          </Button>
        </Form>
      </div>
    </StepTwoWrap>
  );
};

export default Business;
