import * as React from "react";
import { Box, FormControlLabel, Checkbox, Stack, Grid } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { stringToColor } from "../../../utils/stringColor.util";
import { IUserPosition } from "../../../interfaces/user";

interface IPlayerPositionsListProps {
  gridColumnsData: IUserPosition[][];
  checked: IUserPosition[];
  setChecked: React.Dispatch<React.SetStateAction<IUserPosition[]>>;
}

const PlayerPositionsList: React.FunctionComponent<
  IPlayerPositionsListProps
> = ({ gridColumnsData, setChecked, checked }) => {

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

  return (
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
  );
};

export default PlayerPositionsList;
