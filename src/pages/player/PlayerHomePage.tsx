import { Box, Button, Grid, Stack } from "@mui/material";
import * as React from "react";
import SearchBox from "../../components/common/SearchBox";
import {
  IGetPlayersResponse,
  IUserFilter,
  IUserQuery,
} from "../../interfaces/user";
import { getPlayersService } from "../../apis/user.api";
import {
  handleErrorMessage,
  handleSuccessMessage,
} from "../../utils/message-handle.util";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import {
  updateCountPlayers,
  updatePlayers,
  updatePlayersFilterDialog,
} from "../../stores/userSlice";
import PlayerCard from "../../components/player/PlayerCard";
import FilterDialog from "../../components/player/filter/FilterDialog";
import TuneIcon from "@mui/icons-material/Tune";
import Loading from "../../components/common/Loading";
interface IPlayerHomePageProps {}

const PlayerHomePage: React.FunctionComponent<IPlayerHomePageProps> = (
  props
) => {
  const dispatch = useAppDispatch();
  const { players, positionsFilter } = useAppSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const handleOpenFilter = () => {
    dispatch(updatePlayersFilterDialog());
  };

  React.useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        let params: IUserQuery = {};
        let filters: IUserFilter = {};

        if (searchTerm !== "") {
          params.name = searchTerm;
        }

        if (positionsFilter.length > 0) {
          filters.positions = positionsFilter;
        }
        const res: IGetPlayersResponse = await getPlayersService(
          params,
          filters
        );

        handleSuccessMessage(res, toast);
        dispatch(updatePlayers(res.data.players));
        dispatch(updateCountPlayers(res.data.count));
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        handleErrorMessage(error, toast);
      }
    };

    fetchUsers();
  }, [searchTerm, positionsFilter]);

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
        <Button
          onClick={handleOpenFilter}
          //  variant="contained"
        >
          <TuneIcon />
        </Button>
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

      <FilterDialog />
      <Loading loading={loading} />
    </Box>
  );
};

export default PlayerHomePage;
