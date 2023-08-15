import { Box, Tab, Tabs, Typography } from "@mui/material";
import * as React from "react";
import UpdatePassword from "../components/auth/profile/UpdatePassword";
import GeneralInfos from "../components/auth/profile/GeneralInfos";
import Skills from "../components/auth/profile/Skills";

interface IAccountSettingsProps {}

interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel: React.FunctionComponent<ITabPanelProps> = (
  props: ITabPanelProps
) => {
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
        <Box>
          <>{children}</>
        </Box>
      )}
    </div>
  );
};

const AccountSettings: React.FunctionComponent<IAccountSettingsProps> = (
  props
) => {
  const [value, setValue] = React.useState<number>(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ my: 10, mx: 5 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value={0} label="General" />
        <Tab value={1} label="Skills" />
        <Tab value={2} label="Password" />
      </Tabs>

      <Box sx={{ my: 3 }}>
        <CustomTabPanel value={value} index={0}>
          <GeneralInfos />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Skills />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <UpdatePassword />
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default AccountSettings;
