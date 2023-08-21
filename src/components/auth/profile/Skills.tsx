import { LoadingButton } from "@mui/lab";
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
import { useFormik, Form, FormikProvider } from "formik";
import { IUpdateUserResponse, IUserSkill } from "../../../interfaces/user";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { updateUserService } from "../../../apis/user.api";
import { toast } from "react-toastify";
import { updateUser } from "../../../stores/userSlice";
import {
  handleErrorMessage,
  handleSuccessMessage,
} from "../../../utils/message-handle.util";

interface ISkillsProps {}

const data = [
  {
    subject: "defending",
    point: 0,
    fullMark: 100,
  },
  {
    subject: "physical",
    point: 0,
    fullMark: 100,
  },
  {
    subject: "passing",
    point: 0,
    fullMark: 100,
  },
  {
    subject: "vision",
    point: 0,
    fullMark: 100,
  },
  {
    subject: "attacking",
    point: 0,
    fullMark: 100,
  },
  {
    subject: "dribbling",
    point: 0,
    fullMark: 100,
  },
  {
    subject: "heading",
    point: 0,
    fullMark: 100,
  },
];

const Skills: React.FunctionComponent<ISkillsProps> = (props) => {
  const dispatch = useAppDispatch();
  const currUser = useAppSelector((state) => state.user.currUser);
  const [chartData, setChartData] = React.useState<IUserSkill[]>(
    currUser && currUser.skills.length > 0 ? currUser.skills : data
  );

  const initialValues = chartData
    ? chartData.reduce((result: any, item: IUserSkill) => {
        result[item.subject] = item.point;
      return result;
      }, {})
    : {
        defending: 1,
        physical: 1,
        passing: 1,
        vision: 1,
        attacking: 1,
        dribbling: 1,
        heading: 1,
      };

  const skillFormik = useFormik({
    initialValues,
    onSubmit: async (values, actions) => {
      try {
        const skillsPayload: IUserSkill[] = Object.entries(values).map(
          ([subject, point]) => ({
            subject,
            point: Number(point),
            fullMark: 100,
          })
        );

        const res: IUpdateUserResponse = await updateUserService({
          skills: skillsPayload,
        });

        handleSuccessMessage(res, toast);
        dispatch(updateUser(res.data.user));
      } catch (error: any) {
        handleErrorMessage(error, toast);
      }
    },
  });

  const handleChange = (
    subject: string,
    event: Event,
    newValue: number | number[]
  ) => {
    const newData = JSON.parse(JSON.stringify(chartData));
    const index = newData.findIndex(
      (element: IUserSkill) => element.subject === subject
    );

    newData[index]["point"] = newValue as number;

    setChartData(newData);
    setFieldValue(`${newData[index].subject}`, newValue as number);
  };
  const { handleSubmit, dirty, setFieldValue, isSubmitting } = skillFormik;

  return (
    <Box sx={{ my: 10 }}>
      <FormikProvider value={skillFormik}>
        <Form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Stack>
                {chartData.map((item) => {
                  return (
                    <Box key={item.subject}>
                      <Typography gutterBottom>{item.subject}</Typography>

                      <Slider
                        value={item.point}
                        aria-label="Default"
                        valueLabelDisplay="auto"
                        onChange={(e, value) =>
                          handleChange(item.subject, e, value)
                        }
                      />
                    </Box>
                  );
                })}
              </Stack>

              <LoadingButton
                disabled={!dirty}
                variant="contained"
                type="submit"
                loading={isSubmitting}
              >
                Update
              </LoadingButton>
            </Grid>

            <Grid item xs={12} md={8}>
              <ResponsiveContainer width="100%" aspect={3}>
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  data={chartData}
                >
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
        </Form>
      </FormikProvider>
    </Box>
  );
};

export default Skills;
