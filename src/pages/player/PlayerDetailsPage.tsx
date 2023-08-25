import {
  Avatar,
  Box,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { handleErrorMessage } from "../../utils/message-handle.util";
import { toast } from "react-toastify";
import Loading from "../../components/common/Loading";
import { useParams } from "react-router-dom";
import { IGetPlayerDetailsResponse } from "../../interfaces/user";
import { getPlayerDetailsService } from "../../apis/user.api";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { updatePlayerDetails } from "../../stores/userSlice";
import { stringToColor } from "../../utils/stringColor.util";
import PlayerSkillChart from "../../components/common/player/PlayerSkillChart";
import TeamsList from "../../components/team/TeamsList";
import NewsList from "../../components/news/NewsList";

interface IPlayerDetailsPageProps {}

const PlayerDetailsPage: React.FunctionComponent<IPlayerDetailsPageProps> = (
  props
) => {
  const dispatch = useAppDispatch();
  const { playerId } = useParams();
  const [loading, setLoading] = React.useState<boolean>(false);
  const { playerDetails } = useAppSelector((state) => state.user);

  React.useEffect(() => {
    const fetchPlayerDetails = async () => {
      try {
        setLoading(true);

        if (!playerId) {
          toast.error("Somethings wrong");
        }

        const res: IGetPlayerDetailsResponse = await getPlayerDetailsService(
          playerId
        );

        dispatch(updatePlayerDetails(res.data.player));
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        handleErrorMessage(error, toast);
      }
    };

    fetchPlayerDetails();
  }, [playerId]);

  return (
    <>
      {playerDetails && (
        <Box sx={{ my: 10, mx: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Stack sx={{ px: 5 }} spacing={1}>
                <Stack justifyContent="center" alignItems="center">
                  <Avatar
                    sx={{
                      width: 200,
                      height: 200,
                    }}
                    alt={playerDetails.name}
                    src={playerDetails.avatar || ""}
                  />
                </Stack>

                <Stack spacing={1}>
                  <TextField
                    fullWidth
                    value={playerDetails.name}
                    type="text"
                    label="Name"
                  />
                  <TextField
                    fullWidth
                    value={playerDetails.email}
                    type="text"
                    label="Email"
                  />
                  <TextField
                    fullWidth
                    value={playerDetails.phoneNumber}
                    type="text"
                    label="PhoneNumber"
                  />

                  <Stack spacing={1}>
                    <Typography>Positions</Typography>
                    <Box
                      sx={{
                        width: "100%",
                        height: 50,
                        display: "flex",
                        gap: 3,
                      }}
                    >
                      {playerDetails.position.map((position, index) => {
                        return (
                          <Box
                            sx={{
                              textAlign: "center",
                              bgcolor: stringToColor(position),
                              width: "100%",
                              height: "50%",
                              fontWeight: "bold",
                              borderRadius: 5,
                            }}
                          >
                            {position}
                          </Box>
                        );
                      })}
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <PlayerSkillChart chartData={playerDetails.skills} />
            </Grid>
          </Grid>

          <TeamsList />
          <Divider sx={{ my: 2 }} />

          <NewsList />
        </Box>
      )}
      <Loading loading={loading} />
    </>
  );
};

export default PlayerDetailsPage;
