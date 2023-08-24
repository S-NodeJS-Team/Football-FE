import { Box, Button, Grid, Stack } from "@mui/material";
import * as React from "react";
import SearchBox from "../../components/common/SearchBox";
import { IGetPlayersResponse, IUserQuery } from "../../interfaces/user";
import { getPlayersService } from "../../apis/user.api";
import {
  handleErrorMessage,
  handleSuccessMessage,
} from "../../utils/message-handle.util";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { updateCountPlayers, updatePlayers } from "../../stores/userSlice";
import PlayerCard from "../../components/player/PlayerCard";

interface IPlayerHomePageProps {}

const PlayerHomePage: React.FunctionComponent<IPlayerHomePageProps> = (
  props
) => {
  const dispatch = useAppDispatch();
  const players = useAppSelector((state) => state.user.players);

  const [searchTerm, setSearchTerm] = React.useState<string>("");

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        let params: IUserQuery = {};

        if (searchTerm !== "") {
          params.name = searchTerm;
        }
        const res: IGetPlayersResponse = await getPlayersService(params);

        handleSuccessMessage(res, toast);
        dispatch(updatePlayers(res.data.players));
        dispatch(updateCountPlayers(res.data.count));
      } catch (error: any) {
        handleErrorMessage(error, toast);
      }
    };

    fetchUsers();
  }, [searchTerm]);

  return (
    <Box sx={{ my: 10, mx: 5 }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        <SearchBox
          placeHolder="Search player by name"
          value={searchTerm}
          setValue={setSearchTerm}
        />
        <Button variant="contained">Filter</Button>
      </Stack>

      {/* <Stack direction="row" spacing={2} sx={{ my: 2 }}>
        {players.map((player, index) => {
          return <PlayerCard key={`${player.name}${index}`} player={player} />;
        })}
      </Stack> */}

      <Grid container sx={{ my: 2, px: 2 }}>
        {players.map((player, index) => {
          return (
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <PlayerCard key={`${player.name}${index}`} player={player} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default PlayerHomePage;
