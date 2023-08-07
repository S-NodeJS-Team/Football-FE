import * as React from "react";

import { useState } from "react";
import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import UserMenu from "./UserMenu";

interface IUserIconProps {}

const UserIcon: React.FunctionComponent<IUserIconProps> = (props) => {
  const [anchorUserMenu, setAnchorUserMenu] =
    React.useState<null | HTMLElement>(null);

  return (
    <Box>
      <Tooltip title="Open user settings">
        <IconButton onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
          <Avatar
            // src={userInfo?.avatar}
            // alt={userInfo?.name}
            // {...stringAvatar(userInfo?.name)}
          />
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
