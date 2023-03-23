import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import cover1 from "../../assets/portfolios/1.jpg";
import cover2 from "../../assets/portfolios/2.jpg";
import cover3 from "../../assets/portfolios/3.jpg";
import cover4 from "../../assets/portfolios/4.jpg";
import cover5 from "../../assets/portfolios/5.jpg";
import cover6 from "../../assets/portfolios/6.jpg";
import cover7 from "../../assets/portfolios/7.jpg";

import "./style.css";

export const Portfolios = () => {
  return (
    <>
      <div className="row">
        <div className="column">
          <img src={cover1} className="card-hover" alt="" />
          <img src={cover2} className="card-hover" alt="" />
          <img src={cover3} className="card-hover" alt="" />
        </div>
        <div className="column">
          <img src={cover4} className="card-hover" alt="" />
          <img src={cover5} className="card-hover" alt="" />
          <img src={cover6} className="card-hover" alt="" />
        </div>

        <div className="column">
          {" "}
          <img src={cover1} className="card-hover" alt="" />
          <img src={cover2} className="card-hover" alt="" />
          <img src={cover3} className="card-hover" alt="" />
        </div>
        <div className="column">
          {" "}
          <img src={cover2} className="card-hover" />
          <img src={cover7} className="card-hover" />
          <img src={cover1} className="card-hover" />
        </div>
      </div>
    </>
  );
};
