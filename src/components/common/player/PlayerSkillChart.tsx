import * as React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { IUserSkill } from "../../../interfaces/user";

interface IPlayerSkillChartProps {
  chartData: IUserSkill[];
}

const PlayerSkillChart: React.FunctionComponent<IPlayerSkillChartProps> = ({
  chartData,
}) => {
  return (
    <ResponsiveContainer width="100%" aspect={1.5}>
      <RadarChart cx="50%" cy="50%" outerRadius="90%" data={chartData}>
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
  );
};

export default PlayerSkillChart;
