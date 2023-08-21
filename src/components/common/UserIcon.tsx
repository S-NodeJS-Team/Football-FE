import * as React from "react";
import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import UserMenu from "./UserMenu";
import { useAppSelector } from "../../hooks/redux-hooks";
import { stringAvatar } from "../../utils/stringColor.util";

interface IUserIconProps {}

const UserIcon: React.FunctionComponent<IUserIconProps> = (props) => {
  const [anchorUserMenu, setAnchorUserMenu] =
    React.useState<null | HTMLElement>(null);

  const currUser = useAppSelector((state) => state.user.currUser);

  return (
    <Box>
      {currUser && (
        <Tooltip title="Open user settings">
          <IconButton onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
            <Avatar
              {...stringAvatar(currUser?.name)}
              src={currUser?.avatar || ""}
              alt={currUser?.name}
            />
          </IconButton>
        </Tooltip>
      )}
      <UserMenu
        anchorUserMenu={anchorUserMenu}
        setAnchorUserMenu={setAnchorUserMenu}
      />
    </Box>
  );
};

export default UserIcon;
