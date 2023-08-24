import { Box, Divider, Stack, Typography } from "@mui/material";
import * as React from "react";
import { IUser } from "../../interfaces/user";

interface IPlayerCardProps {
  player: IUser;
}

const PlayerCard: React.FunctionComponent<IPlayerCardProps> = ({ player }) => {
  return (
    <Stack
      sx={{
        mb: 10,
        width: 300,
        position: "relative",
        transition: "all .2s ease-in-out",
        "&:hover": {
          cursor: "pointer",
          transform: "scale(1.1)",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "#074f57",
          color: "#ffffff",
          backgroundImage: `url(${player.avatar})`,
          py: 2,
          width: { xs: 150, md: 180, lg: 170, xl: 220 },
          height: 100,
          borderRadius: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "brightness(0.8)",
          position: "absolute",
        }}
      />

      <Stack sx={{ mx: 2, mt: 7, color: "#ffffff", position: "relative" }}>
        <Typography variant="h6">4</Typography>
        <Box sx={{ border: "2px solid white", maxWidth: 50 }} />
        <Typography variant="h6">{player.name}</Typography>
      </Stack>
    </Stack>
  );
};

export default PlayerCard;
