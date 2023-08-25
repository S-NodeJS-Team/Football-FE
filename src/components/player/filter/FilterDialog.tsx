import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import {
  updatePlayersFilterDialog,
  updatePositionsFilter,
} from "../../../stores/userSlice";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
} from "@mui/material";
import PlayerPositionsList from "../../common/player/PlayerPositionsList";
import { IUserPosition, positionsList } from "../../../interfaces/user";
import { handleUserPositionData } from "../../../utils/handle-user-position";

interface IFilterDialogProps {}

const FilterDialog: React.FunctionComponent<IFilterDialogProps> = (props) => {
  const { playersFilterDialog } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const tempPositions: IUserPosition[] = JSON.parse(
    JSON.stringify(positionsList)
  );

  const [checked, setChecked] = React.useState<IUserPosition[]>(
    handleUserPositionData(null, tempPositions)
  );
  const handleClose = () => {
    dispatch(updatePlayersFilterDialog());
  };

  const handleFilter = () => {
    const positionArr: string[] = checked
      .filter((position) => position.checked)
      .map((position) => position.name);

    dispatch(updatePositionsFilter(positionArr));
    dispatch(updatePlayersFilterDialog());
  };

  const gridColumnsData = checked.reduce(
    (acc: IUserPosition[][], item, index) => {
      const columnIndex = index % 4;
      acc[columnIndex].push(item);
      return acc;
    },
    [[], [], [], []]
  );

  return (
    <Dialog
      open={playersFilterDialog}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="xl"
    >
      <DialogTitle id="alert-dialog-title">
        {"Filter with player position"}
      </DialogTitle>
      <DialogContent>
        <PlayerPositionsList
          checked={checked}
          setChecked={setChecked}
          gridColumnsData={gridColumnsData}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={handleFilter} autoFocus variant="contained">
          Filter
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FilterDialog;
