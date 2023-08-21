import * as React from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import {
  Card,
  styled,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Collapse,
  Stack,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IMatchCardProps {}
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MatchCard: React.FunctionComponent<IMatchCardProps> = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src="data:image/png;base64,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"
          >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Da Nang Tournament"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://www.aljazeera.com/wp-content/uploads/2022/10/2022-09-18T191545Z_1003257161_UP1EI9I1HI7IH_RTRMADP_3_SOCCER-FRANCE-LYO-PSG-REPORT.jpg?resize=1920%2C1440"
        alt="Paella dish"
      />
      <CardContent>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          sx={{ my: 1 }}
        >
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src="https://upload.wikimedia.org/wikipedia/vi/thumb/a/a1/Man_Utd_FC_.svg/1200px-Man_Utd_FC_.svg.png"
          >
            R
          </Avatar>

          <Typography>VS</Typography>

          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png"
          >
            R
          </Avatar>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          The football tournament match between Manchester United (MU) and
          Borussia Dortmund was an exciting encounter between two well-known
          European clubs.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default MatchCard;
