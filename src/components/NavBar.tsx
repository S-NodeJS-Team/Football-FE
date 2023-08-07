import * as React from "react";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Tooltip,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Home as HomeIconMui } from "@mui/icons-material";
import UserIcon from "./common/UserIcon";
import { useAppDispatch } from "../hooks/redux-hooks";
import { openLoginForm } from "../stores/commonSlice";
import LoginFormDialog from "./auth/login/LoginFormDialog";
import RegisterMenu from "./auth/register/RegisterMenu";

interface INavBarProps {}

const currUser = null;

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [anchorUserMenu, setAnchorUserMenu] =
    React.useState<null | HTMLElement>(null);
  return (
    <>
      <AppBar>
        <Container maxWidth="lg">
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

            <Typography
              variant="h6"
              component="h1"
              noWrap
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              You are Welcome
            </Typography>

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
        </Container>
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
