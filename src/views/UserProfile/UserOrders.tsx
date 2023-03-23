import React, { useState, useEffect } from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import MUIDataTable from "mui-datatables";
// import { getOrders, downloadOrdersFile } from "../../services/api/orders";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { downloadOrdersFile, getOrders } from "../../services/api/ordersApi";

const UserOrders = () => {
  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "orderDescription",
      label: "Order Description",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "specialRequests",
      label: "Special Requests",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "cancellationStatus",
      label: "Cancellation Status",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "deliveryAddress",
      label: "Delivery Address",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: "service.serviceName",
      label: "Service",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "cancellationStatus",
      label: "Cancellation Status",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              {!value ? <div>Not Cancelled</div> : <div>Order Cancelled</div>}
            </>
          );
        },
      },
    },
    {
      name: "fileUrl",
      label: "File",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          console.log("table meta is ", tableMeta);
          let url = tableMeta.rowData[7];
          url = url.split("/");
          console.log("url ius ", url);
          let fileName = url[2];
          console.log("filename is ", fileName);
          return (
            <>
              <Button
                onClick={() => downloadFile(fileName)}
                size="sm"
                variant="outline-success"
              >
                <FileDownloadOutlinedIcon />
              </Button>
            </>
          );
        },
      },
    },
    {
      name: "actions",
      label: "Actions",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <Button size="sm">Cancel</Button>
            </>
          );
        },
      },
    },
  ];
  const [ordersData, setOrdersData] = useState();

  const downloadFile = async (fileName) => {
    const response: any = await downloadOrdersFile(fileName);
    console.log("response is ", response);
  };

  const fetchOrders = async () => {
    try {
      const response: any = await getOrders(1);
      console.log("orders are ", response);
      if (response.data.success) {
        console.log("success reached");
        setOrdersData(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <Container>
        <MUIDataTable
          data={ordersData}
          columns={columns}
          style={{ borderRadius: "100px" }}
        />
      </Container>
    </>
  );
};

export default UserOrders;
