import React from "react";
import { useStyles } from "./styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Logo from "../../assets/Logo.png";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

export default function LeaderboardCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <CardMedia>
        <img src={require("../../assets/Logo.png")} className={classes.img} />
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
