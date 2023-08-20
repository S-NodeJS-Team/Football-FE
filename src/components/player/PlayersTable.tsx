import {
  Box,
  Table,
  TableCell,
  TableContainer,
  Paper,
  TableBody,
  TableRow,
  TablePagination,
  TableHead,
  Avatar,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { IQueryParams } from "../../interfaces/api/api.interface";
import { IGetPlayersResponse } from "../../interfaces/user";
import { getPlayersService } from "../../apis/user.api";
import {
  handleErrorMessage,
  handleSuccessMessage,
} from "../../utils/message-handle.util";
import { toast } from "react-toastify";
import { updateCountPlayers, updatePlayers } from "../../stores/userSlice";
import { stringAvatar } from "../../utils/stringColor.util";

interface IPlayersTableProps {}
interface HeadCell {
  id: string;
  label: string;
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    label: "Player",
  },
  {
    id: "phoneNumber",
    label: "PhoneNumber",
  },
  {
    id: "rating",
    label: "Rating",
  },
  {
    id: "position",
    label: "Position",
  },
  {
    id: "actions",
    label: "Actions",
  },
];

const PlayersTable: React.FunctionComponent<IPlayersTableProps> = (props) => {
  const { players, countPlayers } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const params: IQueryParams = {
          page,
          take: rowsPerPage,
        };

        const res: IGetPlayersResponse = await getPlayersService(params);

        handleSuccessMessage(res, toast);
        dispatch(updatePlayers(res.data.players));
        dispatch(updateCountPlayers(res.data.count));
      } catch (error: any) {
        handleErrorMessage(error, toast);
      }
    };

    fetchUsers();
  }, [page, rowsPerPage]);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            // aria-labelledby="tableTitle"
            // size={dense ? "small" : "medium"}
            size="small"
          >
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell key={headCell.id}>{headCell.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow hover key={row.name}>
                    <TableCell width={300}>
                      <Stack alignItems="center" direction="row" spacing={1}>
                        <Avatar
                          {...stringAvatar(row.name)}
                          src={row.avatar || ""}
                          alt={row.name}
                        />
                        <Stack alignItems="flex-start">
                          <Typography>{row.name}</Typography>
                          <Typography variant="caption">{row.email}</Typography>
                        </Stack>
                      </Stack>
                    </TableCell>
                    <TableCell id={labelId}>{row.phoneNumber}</TableCell>
                    <TableCell>4.0</TableCell>

                    <TableCell>{row.phoneNumber}</TableCell>
                  </TableRow>
                );
              })}
              {players.length === 0 && (
                <TableRow
                  style={{
                    height: 33,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {countPlayers && (
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={countPlayers}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Paper>
    </Box>
  );
};

export default PlayersTable;
