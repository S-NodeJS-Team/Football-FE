import * as React from "react";
import { Avatar, Box, LinearProgress, Stack, Typography } from "@mui/material";
interface ILiveMatchProps {}

const LiveMatch: React.FunctionComponent<ILiveMatchProps> = (props) => {
  return (
    <Stack alignItems="center" spacing={3} sx={{ py: 10 }}>
      <Stack alignItems="center">
        <Typography variant="h5">Live Match</Typography>
        <Typography variant="caption">62 : 24</Typography>
      </Stack>

      <Stack direction="row" spacing={3} alignItems="center">
        <Avatar
          src="https://cdn-icons-png.flaticon.com/512/824/824727.png"
          alt="homeTeam"
          sx={{ width: 100, height: 100 }}
        />

        <Box
          sx={{
            backgroundColor: "#DBECEA",
            textAlign: "center",
            width: 100,
            borderRadius: 5,
            padding: 1,
          }}
        >
          <Typography variant="h4">2 - 2</Typography>
        </Box>

        <Avatar
          src="https://cdn.icon-icons.com/icons2/103/PNG/256/chelsea_17987.png"
          alt="awayTeam"
          sx={{ width: 100, height: 100 }}
        />
      </Stack>

      <Stack spacing={2} sx={{ textAlign: "center" }} width="70%">
        <Stack spacing={2}>
          <Typography>Shoot on Target</Typography>

          <Stack direction="row" spacing={2}>
            <LinearProgress
              color="secondary"
              value={50}
              sx={{ width: "100%" }}
            />
            <LinearProgress color="success" value={76} sx={{ width: "100%" }} />
          </Stack>
        </Stack>

        <Stack spacing={2}>
          <Typography>Shoot</Typography>

          <Stack direction="row" spacing={2}>
            <LinearProgress
              color="secondary"
              value={50}
              sx={{ width: "100%" }}
            />
            <LinearProgress color="success" value={76} sx={{ width: "100%" }} />
          </Stack>
        </Stack>

        <Stack spacing={2}>
          <Typography>Fouls</Typography>

          <Stack direction="row" spacing={2}>
            <LinearProgress
              color="secondary"
              value={50}
              sx={{ width: "100%" }}
            />
            <LinearProgress color="success" value={76} sx={{ width: "100%" }} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LiveMatch;
