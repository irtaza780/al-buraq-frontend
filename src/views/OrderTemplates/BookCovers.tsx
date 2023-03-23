import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import cover1 from "../../assets/book-covers/1.jpg";
import cover2 from "../../assets/book-covers/2.jpg";
import cover3 from "../../assets/book-covers/3.jpg";
import cover4 from "../../assets/book-covers/4.jpg";
import cover5 from "../../assets/book-covers/5.jpg";
import cover6 from "../../assets/book-covers/6.jpg";
import "./style.css";
import { useNavigate } from "react-router";

export const BookCovers = () => {
  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate("/order-checkout");
  };
  return (
    <>
      <div className="row">
        <div className="column">
          <img
            src={cover1}
            className="card-hover"
            alt=""
            onClick={handleImageClick}
          />
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
          <img src={cover2} className="card-hover" alt="" />
          <img src={cover3} className="card-hover" alt="" />
          <img src={cover1} className="card-hover" alt="" />
        </div>
      </div>
    </>
  );
};
