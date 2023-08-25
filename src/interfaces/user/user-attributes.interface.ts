export interface IUserSkill {
  subject: string;
  point: number;
  fullMark: number;
}

export interface IUserPosition {
  id: string;
  shortName: string;
  name: string;
  checked: boolean;
}

export interface IUserSubSkill {
  subject: string;
  point: number;
  fullMark: number;
}

export const positionsList: IUserPosition[] = [
  { id: "gk", shortName: "GK", name: "Goalkeeper", checked: false },
  { id: "lf", shortName: "LF", name: "Left forward", checked: false },
  { id: "rf", shortName: "RF", name: "Right forward", checked: false },
  { id: "cf", shortName: "CF", name: "Centre Forward", checked: false },
  { id: "sw", shortName: "SW", name: "Sweeper / Libero", checked: false },
  { id: "st", shortName: "ST", name: "Striker", checked: false },
  {
    id: "cb",
    shortName: "CB",
    name: "Centre Back / Centre Defender",
    checked: false,
  },
  {
    id: "lb",
    shortName: "LB",
    name: "Left Back / Left Defender",
    checked: false,
  },
  {
    id: "rb",
    shortName: "RB",
    name: "Right Back / Right Defender",
    checked: false,
  },
  { id: "rs", shortName: "RS", name: "Right sideback", checked: false },
  { id: "ls", shortName: "LS", name: "Left sideback", checked: false },
  {
    id: "lm",
    shortName: "LM",
    name: "Left / right) Midfielder",
    checked: false,
  },
  {
    id: "rm",
    shortName: "RM",
    name: "Left / right) Midfielder",
    checked: false,
  },
  { id: "cm", shortName: "CM", name: "Centre Midfielder", checked: false },
  {
    id: "lwb",
    shortName: "LWB",
    name: "Left / right) Wide (Back / Defender",
    checked: false,
  },
  {
    id: "rwb",
    shortName: "RWB",
    name: "Left / right) Wide (Back / Defender",
    checked: false,
  },
  {
    id: "lwm",
    shortName: "LWM",
    name: "Left / right) Wide Midfielder - Left / right) Winger",
    checked: false,
  },
  {
    id: "rwm",
    shortName: "RWM",
    name: "Left / right) Wide Midfielder - Left / right) Winger",
    checked: false,
  },
  { id: "am", shortName: "AM", name: "Attacking Midfielder", checked: false },
  { id: "dm", shortName: "DM", name: "Defensive Midfielder", checked: false },
  {
    id: "rdm",
    shortName: "RDM",
    name: "Right defensive midfielder",
    checked: false,
  },
  {
    id: "ldm",
    shortName: "LDM",
    name: "Left defensive midfielder",
    checked: false,
  },
  {
    id: "rcdm",
    shortName: "RCDM",
    name: "Right central defensive midfielder",
    checked: false,
  },
  {
    id: "lcdm",
    shortName: "LCDM",
    name: "Left central defensive midfielder",
    checked: false,
  },
  {
    id: "cdm",
    shortName: "CDM",
    name: "Centre Defensive Midfielder",
    checked: false,
  },
  {
    id: "cam",
    shortName: "CAM",
    name: "Central attacking midfielder",
    checked: false,
  },
  {
    id: "ram",
    shortName: "RAM",
    name: "Right attacking midfielder",
    checked: false,
  },
  {
    id: "rcam",
    shortName: "RCAM",
    name: "Right central attacking midfielder",
    checked: false,
  },
  {
    id: "lam",
    shortName: "LAM",
    name: "Left attacking midfielder",
    checked: false,
  },
  {
    id: "lcam",
    shortName: "LCAM",
    name: "Left central attacking midfielder",
    checked: false,
  },
];

export const skillChartData: IUserSubSkill[] = [
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
