import {
  Avatar,
  Box,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import * as React from "react";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { dateTimeString } from "../../utils/handle-date-time.util";
import InfoIcon from "@mui/icons-material/Info";
import AnalyticsIcon from "@mui/icons-material/Analytics";
interface IMatchesTableProps {}

const MatchesTable: React.FunctionComponent<IMatchesTableProps> = (props) => {
  const matches = [
    {
      id: "one",
      homeTeam: {
        name: "Argentina",
        avatar:
          "https://w7.pngwing.com/pngs/948/511/png-transparent-argentina-national-football-team-2018-world-cup-brazil-national-football-team-australia-national-football-team-2018-world-cup-flag-logo-flower-world-cup.png",
      },
      score: "1-2",
      awayTeam: {
        name: "Italy",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34zxwNE3do5VN1bOjq4vLJtKMDt9rHKhw9bJnWG9UM3ONCJ6WxoeXwuJbQS1aNWgZ4Y0&usqp=CAU",
      },
      type: "Full - Time",
      time: new Date(),
    },
    {
      id: "tưo",
      homeTeam: {
        name: "Portugal",
        avatar: "",
      },
      score: "1-2",
      awayTeam: {
        name: "Belgium",
        avatar: "",
      },
      type: "Full - Time",
      time: new Date(),
    },
    {
      id: "three",
      homeTeam: {
        name: "Ghana",
        avatar: "",
      },
      score: "1-2",
      awayTeam: {
        name: "Brazil",
        avatar: "",
      },
      type: "Full - Time",
      time: new Date(),
    },
    {
      id: "four",
      homeTeam: {
        name: "Uruguay",
        avatar: "",
      },
      score: "1-2",
      awayTeam: {
        name: "Poland",
        avatar: "",
      },
      type: "Full - Time",
      time: new Date(),
    },
  ];
  const [tabValue, setTabValue] = React.useState<number>(0);

  const handleChangeTabValue = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setTabValue(newValue);
  };
  return (
    <Box>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <Stack direction="row" spacing={1} p={2} alignItems="center">
                <SportsSoccerIcon />
                <Typography variant="h5">Football Match</Typography>
              </Stack>

              <Tabs
                value={tabValue}
                onChange={handleChangeTabValue}
                textColor="inherit"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab value={0} label="Latest Match" />
                <Tab value={1} label="Coming Match" />
                <Tab value={2} label="Pre-season" />
                <Tab value={3} label="Live games" />
                <Tab value={4} label="Fun Football" />
              </Tabs>
            </TableHead>

            <TableBody>
              {matches.map((row, index) => {
                const { homeTeam, awayTeam, score, type, time } = row;
                return (
                  <TableRow hover key={row.id}>
                    <TableCell width="50%">
                      <Box>
                        <Stack
                          direction="row"
                          justifyContent="space-around"
                          // px={2}
                        >
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                            width="40%"
                          >
                            <Avatar src={homeTeam.avatar} alt="homeTeam" />

                            <Typography fontWeight="bold">
                              {homeTeam.name}
                            </Typography>
                          </Stack>

                          <Box
                            sx={{
                              backgroundColor: "#EBE8F3",
                              textAlign: "center",
                              width: "10%",
                              borderRadius: 5,
                              padding: 1,
                            }}
                          >
                            <Typography fontWeight="bold" color="#5742A9">
                              {score}
                            </Typography>
                          </Box>

                          <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="flex-end"
                            spacing={1}
                            width="40%"
                          >
                            <Typography fontWeight="bold">
                              {awayTeam.name}
                            </Typography>

                            <Avatar src={awayTeam.avatar} alt="awayTeam" />
                          </Stack>
                        </Stack>
                      </Box>
                    </TableCell>

                    <TableCell width="30%">
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-around"
                      >
                        <Box
                          px={2}
                          py={1}
                          sx={{
                            textAlign: "center",
                            backgroundColor: "#FBE3E3",
                            borderRadius: 2,
                          }}
                        >
                          <Typography color="#FA4343" fontWeight="bold">
                            {type}
                          </Typography>
                        </Box>
                        <Typography>{dateTimeString(time)}</Typography>
                      </Stack>
                    </TableCell>

                    <TableCell width="20%">
                      <Stack direction="row" spacing={1}>
                        <InfoIcon />
                        <AnalyticsIcon />
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default MatchesTable;
