import React from "react";
import styled from "styled-components";

const StepThreeWrap = styled.div`
  padding: 30px;
  color: #000;

  h2 {
    font-weight: 700;
    font-size: 26px;
  }

  button {
    width: 100%;
  }
`;

const Final = () => {
  return (
    <StepThreeWrap>
      <h2>Application submitted successfully!</h2>
      <p>We will let you know once we have an update.</p>
    </StepThreeWrap>
  );
};

export default Final;
