import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserOrders from "./UserOrders";
export const Sidebar = () => {
  return (
    <>
      <Row style={{ marginTop: "54px", height: "93vh" }}>
        <Col md={2} className="bg-dark ps-3 pt-5">
          <Button variant="outline-light" style={{ border: "none" }}>
            My Orders
          </Button>
          <hr className="bg-primary text-white" />
          <Button variant="outline-light" style={{ border: "none" }}>
            User Settings
          </Button>
          <hr />
        </Col>
        <Col md={10} className="d-flex justify-content-center p-5">
          <div style={{padding: "50px"}}>
          <UserOrders />
          </div>
        </Col>
      </Row>
    </>
  );
};
