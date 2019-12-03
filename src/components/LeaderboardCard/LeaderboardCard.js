import React from "react";
import { useStyles } from "./styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

export default function LeaderboardCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <CardMedia>
        <img src={props.photo} className={classes.img} />
      </CardMedia>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.score}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.username}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
