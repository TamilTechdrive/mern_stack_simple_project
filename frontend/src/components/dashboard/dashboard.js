import React from "react";
import { Table } from "react-bootstrap";
import "./dashboard.css";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userdata, setuserdata] = useState([]);
  const Navigate = useNavigate();

  const fetchusers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/user/");
      const data = await response.json();
      setuserdata(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchusers();
  }, []);

  const handleUpdate = (user_Id) => {
    Navigate(`/user/${user_Id}`);
  };

  const handleDelete = async (user_Id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/user/${user_Id}`,
        {
          method: "DELETE",
        }
      );
      console.log(response);
      if (response.ok) {
        fetchusers();
      }
    } catch (error) {
      console.error({ error: error.message });
    }
  };
  return (
    <>
      <h1 className="header-name">Welcome to Dashboard</h1>
      <div className="dashboard-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SL</th>
              <th>User Name</th>
              <th>User email</th>
              <th>Phone no</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {userdata.length > 0 ? (
              userdata.map((user, index) => (
                <tr key={user._id || index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td className="table-data">
                    <Button
                      variant="warning"
                      onClick={() => handleUpdate(user._id)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Dashboard;
