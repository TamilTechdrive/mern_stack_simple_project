import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";
import "./postuser.css";
import { useNavigate } from "react-router-dom";

const Postuser = () => {
  const Navigate = useNavigate();
  const Backend_URI = process.env.REACT_APP_BACKEND_URI
  const [userdata, setuserdata] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleinputchange = (event) => {
    const { name, value } = event.target;
    setuserdata({
      ...userdata,
      [name]: value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${Backend_URI}/api/user/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      });
      const data = await response.json(response);
      console.log(data);
      Navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="center-form">
        <h1>Post new user</h1>
        <Form onSubmit={handlesubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Name"
              value={userdata.name}
              onChange={handleinputchange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={userdata.email}
              onChange={handleinputchange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Enter phone"
              value={userdata.phone}
              onChange={handleinputchange}
            />
          </Form.Group>
          <Button className="user-btn" variant="primary" type="submit">
            Post User
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Postuser;
