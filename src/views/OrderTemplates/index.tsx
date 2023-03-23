import React from "react";
import { Container } from "react-bootstrap";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Row, Col } from "react-bootstrap";
import { BookCovers } from "./BookCovers";
import { MagazineCovers } from "./MagazineCovers";
import { Portfolios } from "./Portfolios";
// import { Sidebar } from "./Sidebar";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const OrderTemplates = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Container style={{ marginTop: "100px" }} fluid>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Book Covers" {...a11yProps(0)} />
              <Tab label="Magazine Covers" {...a11yProps(1)} />
              <Tab label="Portfolios" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <BookCovers />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <MagazineCovers />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Portfolios />
          </TabPanel>
        </Box>
      </Container>
    </>
  );
};

export default OrderTemplates;
