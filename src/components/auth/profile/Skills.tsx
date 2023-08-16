import { Box, Grid, Slider, Stack, Typography } from "@mui/material";
import * as React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

interface ISkillsProps {}

const data = [
  {
    subject: "Defending",
    point: 85,
    fullMark: 100,
  },
  {
    subject: "Physical",
    point: 98,
    fullMark: 100,
  },
  {
    subject: "Passing",
    point: 65,
    fullMark: 100,
  },
  {
    subject: "Vision",
    point: 44,
    fullMark: 100,
  },
  {
    subject: "Attacking",
    point: 85,
    fullMark: 100,
  },
  {
    subject: "Dribbling",
    point: 65,
    fullMark: 100,
  },
  {
    subject: "Heading",
    point: 90,
    fullMark: 100,
  },
];

const Skills: React.FunctionComponent<ISkillsProps> = (props) => {
  return (
    <Box sx={{ my: 10 }}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Stack>
            {data.map((item) => {
              return (
                <Box key={item.subject}>
                  <Typography gutterBottom>{item.subject}</Typography>

                  <Slider
                    defaultValue={item.point}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                  />
                </Box>
              );
            })}
          </Stack>
        </Grid>

        <Grid item xs={12} md={8}>
          <ResponsiveContainer width="100%" aspect={3}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Mike"
                dataKey="point"
                stroke="#000000"
                fill="#5FFBF1"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
