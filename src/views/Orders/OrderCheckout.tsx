import React from "react";

import { Formik } from "formik";
import { Container, Row, Col, Modal } from "react-bootstrap";
import * as Yup from "yup";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  OutlinedInput,
  Button,
  TextField,
  Autocomplete,
} from "@mui/material";
import { createOrder } from "../../services/api/ordersApi";
import { getServices } from "../../services/api/servicesApi";
import "./styles.css";
import { useNavigate } from "react-router";
import OrderPayment from "./OrderPayment";
import Easypaisa from "../../assets/easypaisa-logo.png";
import Jazzcash from "../../assets/jazzcash-logo.png";
import Debitlogo from "../../assets/debit-logo.png";
const OrderCheckout: React.FC = (step) => {
  const navigate = useNavigate();
  const [servicesData, setServicesData] = React.useState<any[]>([]);
  const [selectedFile, setSelectedFile] = React.useState<any>();
  const fetchServices = async () => {
    try {
      const response: any = await getServices();
      if (response.data.success) {
        console.log(response);
        setServicesData(response.data.data);
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchServices();
  }, []);

  function PaymentModal(props: any) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <OrderPayment />
      </Modal>
    );
  }

  function SelectPaymentModal(props: any) {
    const [paymentModal, setPaymentModalShow] = React.useState<boolean>(false);
    const handleCreditPayment = () => {
      setPaymentModalShow(true);
      // setSelectPaymentModalShow(false);
    };
    return (
      <>
        <PaymentModal
          show={paymentModal}
          onHide={() => setPaymentModalShow(false)}
        />
        <Modal
          {...props}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <h5 className="p-5">Please Select a Payment Method</h5>
          <Button
            style={{
              marginLeft: "50px",
              marginRight: "50px",
              marginTop: "50px",
              backgroundColor: "#121212",
              color: "#fecc13",
            }}
          >
            {" "}
            <img
              src={Jazzcash}
              alt="jazzcash"
              style={{
                objectFit: "contain",
                width: "50px",
                paddingRight: "15px",
              }}
            />
            JazzCash
          </Button>
          <Button
            style={{
              marginLeft: "50px",
              marginRight: "50px",
              marginTop: "20px",
              marginBottom: "20px",
              backgroundColor: "#56ac67",
              color: "#342c3e",
            }}
          >
            <img
              src={Easypaisa}
              alt="easypaisa"
              style={{
                objectFit: "contain",
                width: "50px",
                paddingRight: "15px",
              }}
            />{" "}
            EasyPaisa
          </Button>
          <Button
            style={{
              marginLeft: "50px",
              marginRight: "50px",
              marginBottom: "100px",
              backgroundColor: "#2c2e2f",
              color: "white",
            }}
            onClick={handleCreditPayment}
          >
            <img
              src={Debitlogo}
              alt="debit logo"
              style={{
                objectFit: "contain",
                width: "50px",
                paddingRight: "12px",
              }}
            />
            Card/Debit
          </Button>
        </Modal>
      </>
    );
  }

  const [selectPaymentModal, setSelectPaymentModalShow] =
    React.useState<boolean>(false);
  return (
    <>
      <SelectPaymentModal
        show={selectPaymentModal}
        onHide={() => setSelectPaymentModalShow(false)}
      />
      <Row
        className="d-flex justify-content-center"
        style={{ marginTop: "100px" }}
      >
        <h3 className="text-center text-uppercase">Create Order</h3>
        <br />
        <Col md={6}>
          <Formik
            initialValues={{
              orderDescription: "",
              specialRequests: "",
              deliveryAddress: "",
              orderType: 1,
              file: null,
              submit: null,
            }}
            validationSchema={Yup.object().shape({
              orderDescription: Yup.string().required(
                "Order Description is required"
              ),
              specialRequests: Yup.string(),
              deliveryAddress: Yup.string().required("Address is required"),
              orderType: Yup.number().required("Order Type is required"),
              file: Yup.mixed().required("Image is required"),
            })}
            onSubmit={async (
              values,
              { setErrors, setStatus, setSubmitting }
            ) => {
              console.log("hello", values);
              setSelectPaymentModalShow(true);
              let orderDescription = values.orderDescription;
              let specialRequests = values.specialRequests;
              let deliveryAddress = values.deliveryAddress;
              let orderType = values.orderType;
              let ordersFile = values.file;

              let data = {
                orderDescription,
                specialRequests,
                deliveryAddress,
                orderType,
                ordersFile,
              };
              try {
                const response: any = await createOrder(data);
                console.log("response is ", response);
                if (response.data.success) {
                  // navigate("/order-payment");
                  setSelectPaymentModalShow(true);
                } else {
                  console.log(response);
                  alert("error creating your order");
                }
              } catch (err) {
                console.log("err", err);
              }
            }}
            validate={() => ({})}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              setFieldValue,
              isSubmitting,
              touched,
              values,
            }) => (
              <form noValidate onSubmit={handleSubmit}>
                <div className="mb-3">
                  <FormControl
                    fullWidth
                    error={Boolean(
                      touched.orderDescription && errors.orderDescription
                    )}
                  >
                    <InputLabel htmlFor="outlined-adornment-email-login">
                      Order Description
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-email-login"
                      type="text"
                      value={values.orderDescription}
                      name="orderDescription"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="Order Description"
                      inputProps={{}}
                    />
                    {touched.orderDescription && errors.orderDescription && (
                      <FormHelperText error>
                        {errors.orderDescription}
                      </FormHelperText>
                    )}
                  </FormControl>
                </div>

                <div className="mb-3">
                  <FormControl
                    fullWidth
                    error={Boolean(
                      touched.specialRequests && errors.specialRequests
                    )}
                  >
                    <InputLabel htmlFor="outlined-adornment-specialRequests-login">
                      Special Requests
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-specialRequests-login"
                      type="text"
                      value={values.specialRequests}
                      name="specialRequests"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="Special Requests"
                      inputProps={{}}
                    />
                    {touched.specialRequests && errors.specialRequests && (
                      <FormHelperText error>
                        {errors.specialRequests}
                      </FormHelperText>
                    )}
                  </FormControl>
                </div>

                <div className="mb-3">
                  <FormControl
                    fullWidth
                    error={Boolean(
                      touched.deliveryAddress && errors.deliveryAddress
                    )}
                  >
                    <InputLabel htmlFor="outlined-adornment-deliveryAddress-login">
                      Delivery Address
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-deliveryAddress-login"
                      type="text"
                      value={values.deliveryAddress}
                      name="deliveryAddress"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="Special Requests"
                      inputProps={{}}
                    />
                    {touched.deliveryAddress && errors.deliveryAddress && (
                      <FormHelperText error>
                        {errors.deliveryAddress}
                      </FormHelperText>
                    )}
                  </FormControl>
                </div>

                <div className="mb-3">
                  <FormControl
                    error={Boolean(touched.orderType && errors.orderType)}
                    fullWidth
                  >
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={servicesData}
                      getOptionLabel={(option) => option.serviceName}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Service Type" />
                      )}
                      onChange={(e, v) => {
                        setFieldValue("orderType", v.id);
                      }}
                    />
                    {touched.orderType && errors.orderType && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-details-login"
                      >
                        {errors.orderType}
                      </FormHelperText>
                    )}
                  </FormControl>
                </div>

                <input
                  // hidden
                  className="custom-file-input"
                  id="standard-weight-helper-text-file-login"
                  name="file"
                  // value={values.file}
                  multiple
                  type="file"
                  onChange={(event) => {
                    // event.preventDefault();
                    var file = event.target.files[0];
                    const reader = new FileReader();
                    var url = reader.readAsDataURL(file);
                    setFieldValue("file", event.target.files[0]);
                    reader.onloadend = function (e) {
                      setSelectedFile([reader.result]);
                    };
                    setSelectedFile(event.target.files[0]);
                  }}
                />
                <Row className="my-5 mx-5  ">
                  <Button
                    type="submit"
                    className="text-dark text-uppercase fw-bold"
                    style={{
                      letterSpacing: "0.2em",
                      backgroundColor: "#f0d086",
                    }}
                  >
                    Proceed to Checkout
                  </Button>
                </Row>
              </form>
            )}
          </Formik>
        </Col>
      </Row>
    </>
  );
};

export default OrderCheckout;
