import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import { Logout, Settings } from "@mui/icons-material";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { logout } from "../../stores/userSlice";

interface IUserMenuProps {
  anchorUserMenu: null | HTMLElement;
  setAnchorUserMenu: any;
}

const UserMenu: React.FunctionComponent<IUserMenuProps> = ({
  setAnchorUserMenu,
  anchorUserMenu,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCloseUserMenu = () => {
    setAnchorUserMenu(null);
  };

  const handleLogout = () => {
    dispatch(logout())
    navigate("/");
  };

  return (
    <Menu
      anchorEl={anchorUserMenu}
      open={Boolean(anchorUserMenu)}
      onClose={handleCloseUserMenu}
      onClick={handleCloseUserMenu}
    >
      <MenuItem onClick={() => navigate("/account-settings")}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Profile
      </MenuItem>

      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default UserMenu;
