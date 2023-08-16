import * as React from "react";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

interface IRegisterMenuProps {
  anchorUserMenu: null | HTMLElement;
  setAnchorUserMenu: any;
}

const RegisterMenu: React.FunctionComponent<IRegisterMenuProps> = ({
  anchorUserMenu,
  setAnchorUserMenu,
}) => {
  const handleCloseUserMenu = () => setAnchorUserMenu(null);
  const navigate = useNavigate();

  return (
    <Menu
      anchorEl={anchorUserMenu}
      open={Boolean(anchorUserMenu)}
      onClose={handleCloseUserMenu}
      onClick={handleCloseUserMenu}
    >
      <MenuItem onClick={() => navigate("/register")}>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        Register Account
      </MenuItem>

      <MenuItem onClick={() => navigate("/become-organizer")}>
        <ListItemIcon>
          <SportsSoccerIcon />
        </ListItemIcon>
        Become a football organizer
      </MenuItem>
    </Menu>
  );
};

export default RegisterMenu;
