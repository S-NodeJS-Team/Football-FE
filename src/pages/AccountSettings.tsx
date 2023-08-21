import { Box, Tab, Tabs } from "@mui/material";
import * as React from "react";
import UpdatePassword from "../components/auth/profile/UpdatePassword";
import GeneralInfos from "../components/auth/profile/GeneralInfos";
import Skills from "../components/auth/profile/Skills";
import { toast } from "react-toastify";
import PlayerPosition from "../components/auth/profile/PlayerPosition";
import CustomTabPanel from "../components/common/CustomTabPanel";

interface IAccountSettingsProps {}

const AccountSettings: React.FunctionComponent<IAccountSettingsProps> = (
  props
) => {
  const [value, setValue] = React.useState<number>(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    const fetchUserProfiles = async () => {
      try {
      } catch (error: any) {
        const { message } = error.response.data;

        if (Array.isArray(message)) {
          message.forEach((element: String) => {
            toast.error(element);
          });
        }

        toast.error(message);
      }
    };

    fetchUserProfiles();
  }, []);

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
        <Tab value={2} label="Positions" />
        <Tab value={3} label="Password" />
      </Tabs>

      <Box sx={{ my: 3 }}>
        <CustomTabPanel value={value} index={0}>
          <GeneralInfos />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Skills />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <PlayerPosition />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <UpdatePassword />
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default AccountSettings;
