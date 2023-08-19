import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";
import MatchCard from "../components/match/MatchCard";
import PlayersTable from "../components/player/PlayersTable";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const matches = [
    {
      id: "match1",
    },
    {
      id: "match2",
    },
    {
      id: "match3",
    },
    {
      id: "match4",
    },
  ];
  return (
    <Box sx={{ my: 10, mx: 5 }}>
      <Box>
        <Typography variant="h5">Matches List</Typography>
        <Grid container spacing={2}>
          {matches.map((match) => {
            return (
              <Grid key={match.id} item xs={12} sm={6} md={4} lg={3}>
                <MatchCard />
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Box sx={{ my: 2 }}>
        <Typography variant="h5">Players</Typography>
        <PlayersTable />
      </Box>
    </Box>
  );
};

export default HomePage;
