import React from "react";
import "./Magazine.style.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Magazine: React.FC<{
  title: string;
  description: string;
  price: number;
}> = ({ title, description, price }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="book">
        <div className="back"></div>

        <div className="page6">
          <p style={{ fontSize: "10pt" }} className="p-2">
            Description : {description}
          </p>
          <div className="d-flex justify-content-center align-items-center mt-5">
            <Button onClick={()=> navigate("/order-templates")} className="text-center">Order</Button>
          </div>
          <h5 className="fw-bold text-center mt-5">RS. {price}</h5>
        </div>
        <div className="page5"></div>
        <div className="page4"></div>
        <div className="page3"></div>
        <div className="page2"></div>
        <div className="page1"></div>
        <div className="front text-white">
          <div className="side bg-primary">
            <h4 style={{ paddingLeft: "24px", paddingTop: "100px" }}>
              {title}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Magazine;
