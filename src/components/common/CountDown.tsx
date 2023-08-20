import { Stack, Typography } from "@mui/material";
import * as React from "react";
import useCountDown from "../../hooks/useCountDown";

interface ICountDownProps {
  date: Date;
}

const CountDown: React.FunctionComponent<ICountDownProps> = ({ date }) => {
  const countDown = useCountDown(date.getTime());
  const { days, hours, minutes, seconds } = countDown;

  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <Stack>
        <Typography variant="h5">{days}</Typography>
        <Typography variant="caption">Days</Typography>
      </Stack>

      <Typography variant="h5">:</Typography>

      <Stack>
        <Typography variant="h5">{hours}</Typography>
        <Typography variant="caption">Hours</Typography>
      </Stack>
      <Typography variant="h5">:</Typography>

      <Stack>
        <Typography variant="h5">{minutes}</Typography>
        <Typography variant="caption">Minutes</Typography>
      </Stack>
      <Typography variant="h5">:</Typography>

      <Stack>
        <Typography variant="h5">{seconds}</Typography>
        <Typography variant="caption">Seconds</Typography>
      </Stack>
    </Stack>
  );
};

export default CountDown;
