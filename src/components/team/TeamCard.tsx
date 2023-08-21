import { Avatar, Box, Typography } from "@mui/material";
import * as React from "react";
import { ITeam } from "../../interfaces/team";
import { stringAvatar, stringToColor } from "../../utils/stringColor.util";

interface ITeamCardProps {
  team: ITeam;
}

const TeamCard: React.FunctionComponent<ITeamCardProps> = ({ team }) => {
  return (
    <Box
      sx={{
        maxWidth: 300,
        minHeight: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        transition: "transform 0.15s ease-in-out",
        cursor: "pointer",
        "&:hover": {
          scale: "1.1",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Avatar
        src={team.logo}
        alt={team.name}
        sx={{
          width: 100,
          height: 100,
          ...stringAvatar(team.name).sx,
        }}
        children={stringAvatar(team.name).children}
      />

      <Typography>{team.name}</Typography>
    </Box>
  );
};

export default TeamCard;
