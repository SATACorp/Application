import React from "react";
import { useStyles } from "./styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";

export default function LeaderboardCard(props) {
  const classes = useStyles();

  const rankDot = !props.profile ? (
    <Avatar aria-label="recipe" className={classes.rank}>
      {props.rank}
    </Avatar>
  ) : null;

  return (
    <Card className={classes.container}>
      {rankDot}
      <img src={props.photo} className={classes.img} />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h3" className={classes.username}>
            {props.username}
          </Typography>
          <Typography
            variant="h4"
            color="textSecondary"
            className={classes.score}
          >
            {props.score}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
