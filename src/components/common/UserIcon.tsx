import * as React from "react";
import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import UserMenu from "./UserMenu";
import { useAppSelector } from "../../hooks/redux-hooks";

interface IUserIconProps {}

const UserIcon: React.FunctionComponent<IUserIconProps> = (props) => {
  const [anchorUserMenu, setAnchorUserMenu] =
    React.useState<null | HTMLElement>(null);

  const currUser = useAppSelector((state) => state.user.currUser);

  return (
    <Box>
      <Tooltip title="Open user settings">
        <IconButton onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
          <Avatar src={currUser?.avatar} alt={currUser?.name}>
            {currUser.name}
          </Avatar>
        </IconButton>
      </Tooltip>
      <UserMenu
        anchorUserMenu={anchorUserMenu}
        setAnchorUserMenu={setAnchorUserMenu}
      />
    </Box>
  );
};

export default UserIcon;
