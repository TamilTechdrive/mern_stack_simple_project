import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "./updateuser.css";
const Updateuser = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  const [userdata, setuserdata] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/user/${id}`);
        const data = await response.json();
        setuserdata(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchuser();
  }, [id]);

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
      const response = await fetch(`http://localhost:5000/api/user/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      });
      const data = await response.json(response);
      console.log(data);
      Navigate("/");
    } catch (error) {
      console.error({error: error.message});
    }
  };

  return (
    <div className="center-form">
      <h1>Update user</h1>
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
  );
};

export default Updateuser;
