import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import TabPanel from "./TabPanel";
import styles from "./MultiStepForm.module.css";
import OceanTest from "../Step_1/OceanTest";
import OceanResults from "../Step_2/OceanResults";
import CustomerSurvey from "../Step_3/CustomerSurvey";
import TotalResult from "../Step_4/TotalResult";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const MultiStepForm = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const OceanTestSubmitHandler = (e) => {
    e.preventDefault();
    //servera gönder
    setValue(value + 1);
  };
  const nextStep = () => {
    setValue(value + 1);
  };
  const previousStep = () => {
    setValue(value - 1);
  };

  return (
    <div className={styles.multiStepFormContainer}>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          borderRadius: "16px",
          overflow: "hidden",

          display: "flex",
          height: "100%",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs "
          TabIndicatorProps={{
            style: {
              backgroundColor: "var(--red)",
            },
          }}
          sx={{
            borderRight: 1,

            borderColor: "divider",
          }}
        >
          <Tab label="Ocean Testi" {...a11yProps(0)} />
          <Tab label="Sonuçlar " {...a11yProps(1)} />
          <Tab label="Anket" {...a11yProps(2)} />
          <Tab label="Sonuçlar ve Kampanya Önerileri" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <OceanTest nextStep={nextStep} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <OceanResults nextStep={nextStep} previousStep={previousStep} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CustomerSurvey nextStep={nextStep} previousStep={previousStep} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TotalResult previousStep={previousStep} />
        </TabPanel>
      </Box>
    </div>
  );
};

export default MultiStepForm;
