import React, { useEffect, useState } from "react";
import Magazine from "../../ui-components/Magazine";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { getServices } from "../../services/api/servicesApi";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  OutlinedInput,
  Box,
  Button,
  TextField,
  Autocomplete,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { createOrder } from "../../services/api/ordersApi";
import { WindowSharp } from "@mui/icons-material";
import { Footer } from "../../layout/Footer";

const Services = () => {
  // const [selectedFile, setSelectedFile] = useState<any>();

  function CreateOrderModal(props: any) {
    const [selectedFile, setSelectedFile] = useState<any>();
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h2>Create Order</h2>
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
                  alert("your order was create succesfully");
                } else {
                  console.log(response);
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
                    Place Order
                  </Button>
                </Row>
              </form>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
 
  const [servicesData, setServicesData] = useState<any[]>([]);
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

  useEffect(() => {
    fetchServices();
  }, []);

  const [createOrderModal, setCreateOrderModalShow] = useState<boolean>(false);
  const [selectPaymentModal, setSelectPaymentModalShow] =
    useState<boolean>(false);
  return (
    <>
      <Container style={{ marginTop: "100px" }}>
        {/* <Button
          // variant="primary"
          className="mb-5"
          onClick={() => setCreateOrderModalShow(true)}
        >
          Create Order
        </Button> */}

        <CreateOrderModal
          show={createOrderModal}
          onHide={() => setCreateOrderModalShow(false)}
        />
       

        <Row className="d-flex justify-content-start align-items-center ms-5 ps-5">
          {servicesData?.map((data) => (
            <Col xs={12} sm={4} className="pb-5">
              <Magazine
                title={data.serviceName}
                description={data.serviceDescription}
                price={data.price}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default Services;
