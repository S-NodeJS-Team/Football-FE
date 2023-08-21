import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import CountDown from "../common/CountDown";
import { dateTimeString } from "../../utils/handle-date-time.util";
interface IComingMatchProps {}

const imageURL =
  "https://store-images.s-microsoft.com/image/apps.2127.14621801316397473.3c7c0657-fe34-4727-8700-af9b251375de.193acee6-86b5-42a2-82f7-6ab2d5acea1a?mode=scale&q=90&h=1080&w=1920";

const ComingMatch: React.FunctionComponent<IComingMatchProps> = (props) => {
  return (
    <Box
      component="div"
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 25,
        backgroundImage: `url(${imageURL})`,
        backgroundColor: "#074f57",
        color: "#ffffff",
        borderRadius: 6,
      }}
    >
      <Stack alignItems="flex-end" mx={10}>
        <Stack textAlign="center" spacing={1}>
          <Typography variant="h4">England vs Germany</Typography>
          <Typography variant="caption">{dateTimeString(new Date("09/09/2023"))}</Typography>

          <CountDown date={new Date("09/09/2023")} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default ComingMatch;
