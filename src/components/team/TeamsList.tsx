import { Box, Stack, Typography, Button } from "@mui/material";
import * as React from "react";
import Slider from "react-slick";
import TeamCard from "./TeamCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Diversity3Icon from "@mui/icons-material/Diversity3";

interface ITeamsListProps {}

const teams = [
  { id: generateRandomCharacter(), name: "Thunder United" },
  { id: generateRandomCharacter(), name: "Phoenix FC" },
  { id: generateRandomCharacter(), name: "Royal Lions" },
  { id: generateRandomCharacter(), name: "Dynamo City" },
  { id: generateRandomCharacter(), name: "Galaxy United" },
  { id: generateRandomCharacter(), name: "Avalanche FC" },
  { id: generateRandomCharacter(), name: "Victory Stars" },
  { id: generateRandomCharacter(), name: "Striker's Edge" },
];

function generateRandomCharacter() {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return characters[Math.floor(Math.random() * characters.length)];
}

const TeamsList: React.FunctionComponent<ITeamsListProps> = (props) => {
  const slider = React.useRef<Slider>(null);

  const settings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        boxShadow: 3,
        borderRadius: 2,
       
      }}
    >
      <Stack direction="row" alignItems="center">
        <Stack
          flexGrow="1"
          direction="row"
          spacing={1}
          p={2}
          alignItems="center"
        >
          <Diversity3Icon />
          <Typography variant="h5">Football Teams</Typography>
        </Stack>

        <Stack direction="row">
          <Button size="small" onClick={() => slider?.current?.slickPrev()}>
            <KeyboardArrowLeftIcon />
          </Button>
          <Button size="small" onClick={() => slider?.current?.slickNext()}>
            <KeyboardArrowRightIcon />
          </Button>
        </Stack>
      </Stack>
      <Slider ref={slider} {...settings}>
        {teams.map((team) => {
          return <TeamCard key={team.id} team={team} />;
        })}
      </Slider>
    </Box>
  );
};

export default TeamsList;
