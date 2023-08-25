import * as React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Tooltip,
  Box,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Home as HomeIconMui } from "@mui/icons-material";
import UserIcon from "./common/UserIcon";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { openLoginForm } from "../stores/commonSlice";
import LoginFormDialog from "./auth/login/LoginFormDialog";
import RegisterMenu from "./auth/register/RegisterMenu";

interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currUser = useAppSelector((state) => state.user.currUser);

  const [anchorUserMenu, setAnchorUserMenu] =
    React.useState<null | HTMLElement>(null);
  return (
    <>
      <AppBar color="default">
        <Box sx={{ mx: 5 }}>
          <Toolbar disableGutters>
            <Tooltip title="Click here to go Home page">
              <IconButton
                color="inherit"
                onClick={() => navigate("/")}
                sx={{ mr: 1 }}
              >
                <HomeIconMui />
              </IconButton>
            </Tooltip>

            <Stack flexGrow="1" direction="row" alignItems="center" spacing={3}>
              <Typography
                variant="h6"
                component="h1"
                noWrap
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                }}
              >
                You are Welcome
              </Typography>

              <Stack direction="row" spacing={1}>
                <Button color="inherit">News</Button>
                <Button color="inherit" onClick={() => navigate('/players')}>Players</Button>
              </Stack>
            </Stack>

            <Typography
              variant="h6"
              component="h1"
              noWrap
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              YAW
            </Typography>
            {!currUser ? (
              <Stack direction="row" spacing={2}>
                <Button
                  color="inherit"
                  startIcon={<LockIcon />}
                  onClick={() => dispatch(openLoginForm(true))}
                >
                  Login
                </Button>

                <Button
                  color="inherit"
                  endIcon={<MoreVertIcon />}
                  onClick={(e) => setAnchorUserMenu(e.currentTarget)}
                >
                  Register
                </Button>
              </Stack>
            ) : (
              <UserIcon />
            )}
          </Toolbar>
        </Box>
      </AppBar>
      <RegisterMenu
        anchorUserMenu={anchorUserMenu}
        setAnchorUserMenu={setAnchorUserMenu}
      />
      <LoginFormDialog />
    </>
  );
};

export default NavBar;
