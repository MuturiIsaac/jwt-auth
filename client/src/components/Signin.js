import React, { useState } from 'react';
import Axios from 'axios';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from 'mdb-react-ui-kit';

function SignInForm() {
  const url = "http://localhost:8080/api/auth/signin";
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const newdata = { ...data };
    newdata[event.target.id] = event.target.value;
    setData(newdata);
    console.log(newdata);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    Axios.post(url, { // Replace 'url' with the actual API endpoint
      email: data.email,
      password: data.password,
    })
      .then((res) => {
        console.log(res.data);
        // Handle successful API response here, e.g., redirect to a different page
      })
      .catch((error) => {
        console.error(error); // Handle API errors
      });
  };

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard className="bg-dark text-white my-5 mx-auto" style={{ borderRadius: "1rem", maxWidth: "400px" }}>
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Sign In</h2>
              <p className="text-white-50 mb-5">Please enter your credentials!</p>

              <MDBInput
                onChange={handleInputChange}
                id="email"
                value={data.email}
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Email address"
                type="email"
                size="lg"
              />
              <MDBInput
                onChange={handleInputChange}
                id="password"
                value={data.password}
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Password"
                type="password"
                size="lg"
              />

              <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
              <MDBBtn onClick={handleSubmit} outline className="mx-2 px-5" color="white" size="lg">
                Sign In
              </MDBBtn>

              <div className="d-flex flex-row mt-3 mb-5">
                <MDBBtn tag="a" color="none" className="m-3" style={{ color: "white" }}>
                  <MDBIcon fab icon="facebook-f" size="lg" />
                </MDBBtn>

                <MDBBtn tag="a" color="none" className="m-3" style={{ color: "white" }}>
                  <MDBIcon fab icon="twitter" size="lg" />
                </MDBBtn>

                <MDBBtn tag="a" color="none" className="m-3" style={{ color: "white" }}>
                  <MDBIcon fab icon="google" size="lg" />
                </MDBBtn>
              </div>

              <div>
                <p className="mb-0">
                  Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignInForm;
