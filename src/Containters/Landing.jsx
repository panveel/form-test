import React from "react";
import "./landing.css";
import bank from '../assets/bank.png'
import Button from "react-bootstrap/Button";


 const Landing = () => {
  return (
    <div className="iphone-pro">
      <div className="div">
        <div className="overlap-group">
          <h1 className="large-title">
            Hello there!
            <br />
            Welcome
          </h1>
          <img className="mask-group" alt="Mask group" src={bank} />
        </div>
        <div className="text-wrapper">Let’s get started</div>
        <p className="imagine-you-own-a">
          Imagine you own a business and you are seeking funding to run your business.
          <br />
          <br />
          This is a form to apply for funding from an investment company.
          <br />
          <br />
          Please proceed to fill all the required details of the form to complete this task.
        </p>
        <Button style={{position: "absolute", bottom: "100px", left: "20px", right: "20px", width: "90%"}} variant="dark" href="/personal" className="py-3 ">Let's Begin</Button>
      </div>
    </div>
  );
 };

export default Landing;