import { LoadingButton } from "@mui/lab";
import { Box, FormControlLabel, Checkbox, Stack, Grid } from "@mui/material";
import * as React from "react";
import { toast } from "react-toastify";
import {
  handleErrorMessage,
  handleSuccessMessage,
} from "../../../utils/message-handle.util";
import {
  IUpdateUserResponse,
  IUserPosition,
  positionsList,
} from "../../../interfaces/user";
import { updateUserService } from "../../../apis/user.api";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { handleUserPositionData } from "../../../utils/handle-user-position";
import { updateUser } from "../../../stores/userSlice";
import { stringToColor } from "../../../utils/stringColor.util";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

interface IPlayerPositionProps {}

const PlayerPosition: React.FunctionComponent<IPlayerPositionProps> = (
  props
) => {
  const dispatch = useAppDispatch();
  const currUser = useAppSelector((state) => state.user.currUser);
  const tempPositions: IUserPosition[] = JSON.parse(
    JSON.stringify(positionsList)
  );

  const [checked, setChecked] = React.useState<IUserPosition[]>(
    handleUserPositionData(currUser, tempPositions)
  );
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleChangeCheckBox = (
    position: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newData = JSON.parse(JSON.stringify(checked));
    const index = newData.findIndex(
      (element: IUserPosition) => element.name === position
    );

    newData[index]["checked"] = e.target.checked;
    setChecked(newData);
  };

  const handleUpdatePosition = async () => {
    try {
      setLoading(true);

      const positionArr: string[] = checked
        .filter((position) => position.checked)
        .map((position) => position.name);

      const res: IUpdateUserResponse = await updateUserService({
        position: positionArr,
      });

      handleSuccessMessage(res, toast);
      dispatch(updateUser(res.data.user));
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      handleErrorMessage(error, toast);
    }
  };

  const gridColumnsData = checked.reduce(
    (acc: IUserPosition[][], item, index) => {
      const columnIndex = index % 6;
      acc[columnIndex].push(item);
      return acc;
    },
    [[], [], [], [], [], []]
  );

  return (
    <Box>
      Positions List
      <Grid container>
        {gridColumnsData.map((col: IUserPosition[], index: number) => {
          return (
            <Grid item xs={12} md={4} lg={3} key={index}>
              <Stack>
                {col.map((position: IUserPosition, index: any) => {
                  return (
                    <FormControlLabel
                      key={position.id}
                      label={position.name}
                      control={
                        <>
                          <Checkbox
                            color="success"
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                            checked={position.checked}
                            onChange={(e) =>
                              handleChangeCheckBox(position.name, e)
                            }
                          />
                          <Box
                            sx={{
                              bgcolor: stringToColor(position.name),
                              width: 35,
                              height: 15,
                              mr: 1,
                              textAlign: "center",
                              fontSize: 10,
                              fontWeight: "bold",
                            }}
                          >
                            {position.shortName}
                          </Box>
                        </>
                      }
                    />
                  );
                })}
              </Stack>
            </Grid>
          );
        })}
      </Grid>
      <LoadingButton
        loading={loading}
        onClick={handleUpdatePosition}
        variant="contained"
      >
        Update
      </LoadingButton>
    </Box>
  );
};

export default PlayerPosition;
