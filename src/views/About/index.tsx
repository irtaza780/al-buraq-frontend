import React from "react";
import Magazine2 from "../../ui-components/Magazine2";
import { Row, Col } from "react-bootstrap";
import { Footer } from "../../layout/Footer";

const About = () => {
  const sampleData = ["Magazine Covers", "Portfolios", "Something", "Novels", "Newspaper", "Graphics"];
  return (
    <>
      <Row className="mx-0 my-5">
        {sampleData.map((data) => (
          <Col xs={12} sm={3}>
            <Magazine2 />
          </Col>
        ))}
      </Row>
      <Footer/>
    </>
  );
};

export default About;
