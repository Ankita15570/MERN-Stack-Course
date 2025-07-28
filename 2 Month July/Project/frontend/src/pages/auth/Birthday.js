import React from 'react'
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Birthday = () => {
  return (
    <div>
      <h1>Birth Date</h1>
      <button type="submit" className="btn btn-primary  mt-2 btn"><Link to="/home">Sign Up</Link></button>
    </div>
  )
}

export default Birthday
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Birthday = () => {
  const [day, setDay] = useState("");

  const [month, setMonth] = useState("");

  const [year, setYear] = useState("");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleSubmit = () => {
    try {
      console.log(month, "month ==>");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="justify-content-center align-items-center">
      <div
        className="container  card p-4 shadow mt-5"
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <h4 className="text-center mb-4">Add Your Birthday</h4>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">Day</label>
            <select className="form-select">
              <option value="">Day 1</option>
              <option value="">Day 2</option>
              <option value="">Day 3</option>
              <option value="">Day 4</option>
            </select>
          </div>

          <div className="col-md-4  mb-3">
            <label className="form-label">Month</label>
            <select
              className="form-select"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option value="">Select Month</option>
              {months.map((each, index) => (
                <option key={index} value={each}>
                  {each}
                </option>
              ))}
            </select>

          </div>

          <div className="col-md-4  mb-4">
            <label className="form-label">Year</label>
            <select className="form-select">
              <option value="">Year 1</option>
              <option value="">Year 2</option>
              <option value="">Year 3</option>
              <option value="">Year 4</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default Birthday;