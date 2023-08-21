import { Box, Divider, Stack, Typography } from "@mui/material";
import * as React from "react";

interface ISubNews {
  id: string;
  coverImage: string;
  tournamentName: string;
  title: string;
  shortDescription: string;
}

interface ISubNewsCardProps {
  subNews: ISubNews;
}

const SubNewsCard: React.FunctionComponent<ISubNewsCardProps> = ({
  subNews,
}) => {
  return (
    <Box sx={{ maxWidth: 300, p: 2 }}>
      <Stack>
        <Box>
          <img
            src={subNews.coverImage}
            alt={subNews.title}
            width={"100%"}
            height="130"
            style={{ borderRadius: 5 }}
          />
        </Box>

        <Stack sx={{ py: 1 }}>
          <Box sx={{ height: 50, mb: 3 }}>
            <Typography
              color="#5742A9"
              textTransform="uppercase"
              fontWeight="bold"
            >
              {subNews.tournamentName}
            </Typography>
            <Typography>{subNews.title}</Typography>
          </Box>

          <Divider />
          <Typography variant="caption">{subNews.shortDescription}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SubNewsCard;
