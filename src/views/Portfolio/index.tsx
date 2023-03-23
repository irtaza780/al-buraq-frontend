import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import PortfolioCover from "../../assets/portfolio-cover.jpg";
import P1 from "../../assets/p1.jpg";
import P2 from "../../assets/p2.jpg";
import P3 from "../../assets/p3.jpg";
import { Footer } from "../../layout/Footer";
const Portfolio = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${PortfolioCover})`,
          height: "40vh",
          overflowX: "hidden",
        }}
        className=" mt-5"
      >
        <h1 className="text-white text-center pt-5">Custom Request</h1>
        <p className="text-white text-center">
          {" "}
          Do you have a request thats unique and need special attention, we have
          your back
        </p>
        <div className="d-flex justify-content-center">
          <Button variant="outline-light rounded-0 text-center fw-bold">
            Email Us
          </Button>
        </div>
      </div>
      <Row className="mx-5 mt-2">
        <span className="fw-bold text-muted text-uppercase">Portfolio</span>
        <h1 className="fw-bold">Check Our Portfolio</h1>
      </Row>
      <Row className="mx-2 mb-5 mt-5">
        <Col md={4} className="mx-0">
          <img src={P1} style={{ width: "500px" }} />
        </Col>
        <Col md={4}>
          <img src={P2} style={{ width: "500px" }} />
        </Col>
        <Col md={4}>
          <img src={P3} style={{ width: "500px" }} />
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Portfolio;
