import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";
import MatchCard from "../components/match/MatchCard";

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
      <Typography variant="h5">Matches List</Typography>
      <Grid container spacing={2}>
        {matches.map((match) => {
          return (
            <Grid key={match.id} item xs={12} md={4} xl={3}>
              <MatchCard />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default HomePage;
