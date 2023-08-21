import { Box, Stack, Typography, Button, Tabs, Tab } from "@mui/material";
import * as React from "react";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SubNewsCard from "./SubNewsCard";

interface INewsListProps {}

const news = [
  {
    id: "news1",
    coverImage:
      "https://e0.365dm.com/22/11/768x432/skysports-lionel-messi-cristiano-ronaldo_5968210.jpg?20221117100618",
    tournamentName: "Premier League",
    title: "Signs of Arsenal getting stronger in the Premier League",
    shortDescription:
      "The victory over Wolves provided a comfortable distance for Arsenal at...",
  },
  {
    id: "news2",
    coverImage:
      "https://i.eurosport.com/2022/12/18/3510736-71561888-2560-1440.jpg",
    tournamentName: "Premier League",
    title: "Manchester United's comeback win against Liverpool",
    shortDescription:
      "Manchester United showcased their resilience with a stunning comeback against Liverpool...",
  },
  {
    id: "news3",
    coverImage:
      "https://ichef.bbci.co.uk/news/1024/branded_pidgin/a617/live/4c8ad930-65d9-11ed-a6af-4f332dcec329.jpg",
    tournamentName: "La Liga",
    title: "Real Madrid secures top spot with a dominant performance",
    shortDescription:
      "Real Madrid displayed their dominance in the league with a convincing victory...",
  },
  {
    id: "news5",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU3E-pzoAv_hNfJsGddzDlLAlq9OCOrhPT3kwNAdSv5xbxXVWhZxH7K0xfexD_VOgVDuQ&usqp=CAU",
    tournamentName: "Bundesliga",
    title: "Bayern Munich's record-breaking season",
    shortDescription:
      "Bayern Munich sets a new record with their impressive performance...",
  },
  {
    id: "news6",
    coverImage:
      "https://xwatch.vn/upload_images/images/2022/10/31/ban-quyen-world-cup-2022-vtv.jpg",
    tournamentName: "Premier League",
    title: "Chelsea's young talent shines in the Premier League",
    shortDescription:
      "Chelsea's young players have been making a significant impact in the league...",
  },
  {
    id: "news7",
    coverImage:
      "https://images.indiafantasy.com/wp-content/uploads/20220724173805/Group-G.png",
    tournamentName: "La Liga",
    title: "Barcelona's struggles in the new season",
    shortDescription:
      "Barcelona faces challenges as they adapt to a new playing style...",
  },
  {
    id: "news8",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR0QYqvtFiKmIGkyu4gPqzoNgMKMo7ifIzoKv6VtgO2C6UXmIjZMu7CHEK1NJZQebbMtM&usqp=CAU",
    tournamentName: "Serie A",
    title: "AC Milan's resurgence under new manager",
    shortDescription:
      "AC Milan shows promising performances since the arrival of their new manager...",
  },
  {
    id: "news20",
    coverImage:
      "https://library.sportingnews.com/2022-04/world-cup-2022-group-b-usa-eng-iran-040122-getty-ftr.jpg",
    tournamentName: "Premier League",
    title: "Leicester City's surprising run in the Premier League",
    shortDescription:
      "Leicester City defies expectations with their impressive performances...",
  },
];

const NewsList: React.FunctionComponent<INewsListProps> = (props) => {
  const slider = React.useRef<Slider>(null);
  const [value, setValue] = React.useState<number>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const settings = {
    speed: 500,
    slidesToShow: 5,
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
          <NewspaperIcon />
          <Typography variant="h5">All news and transfer today</Typography>
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

      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value={0} label="All News" />
        <Tab value={1} label="Hot News" />
        <Tab value={2} label="Transfer" />
      </Tabs>

      {/* <Stack direction="row"> */}
        <Slider ref={slider} {...settings}>
        {news.map((subNews) => {
          return <SubNewsCard key={subNews.id} subNews={subNews} />;
        })}
        </Slider>
      {/* </Stack> */}
    </Box>
  );
};

export default NewsList;
