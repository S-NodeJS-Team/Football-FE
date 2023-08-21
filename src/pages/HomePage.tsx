import { Box, Divider, Grid } from "@mui/material";
import * as React from "react";
import ComingMatch from "../components/match/ComingMatch";
import LiveMatch from "../components/match/LiveMatch";
import MatchesTable from "../components/match/MatchesTable";
import TeamsList from "../components/team/TeamsList";
import NewsList from "../components/news/NewsList";

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
      <Grid container>
        <Grid item xs={12} md={7} lg={8}>
          <ComingMatch />
        </Grid>

        <Grid item xs={12} md={5} lg={4}>
          <LiveMatch />
        </Grid>
      </Grid>

      {/* <Box>
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
      </Box> */}

      <Box sx={{ my: 2 }}>
        <MatchesTable />
        <Divider sx={{ my: 2 }} />
        <TeamsList />

        <Divider sx={{ my: 2 }} />

        <NewsList />
      </Box>
    </Box>
  );
};

export default HomePage;
