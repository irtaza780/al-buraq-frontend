import React from "react";
import { Row, Col } from "react-bootstrap";
import Twitter from "../assets/social/003-twitter.svg";
import Facebook from "../assets/social/001-facebook.svg";
import Instagram from "../assets/social/004-instagram.svg";

export const Footer: React.FC = () => {
  return (
    <>
      <Row style={{ backgroundColor: "#232529" }}>
        <Col className="text-white my-3 text-center">
          <h5 className="mt-4">Al-Buraq Press</h5>

          <div className="d-flex justify-content-center my-5 ">
            <img src={Twitter} className="mx-3" alt="twitter" />
            <img src={Facebook} className="mx-3" alt="facebook" />
            <img src={Instagram} className="mx-3" alt="instagram" />
          </div>
          <p
            style={{
              fontSize: "9pt",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            className="text-muted"
          >
            Terms of Use
          </p>
          <hr className="mx-5" />
          <p className="mt-4">
            Copyright &#169; Al-Buraq Press All Rights Reserved
          </p>
        </Col>
      </Row>
    </>
  );
};
