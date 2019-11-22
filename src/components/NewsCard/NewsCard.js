import React from "react";
import { useStyles } from "./styles";
import firebase from "../../firebase";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function NewsCard(props) {
  const classes = useStyles();

  
  return (
     <Card className={classes.card}>
       <CardHeader
         title={props.title}
         subheader={props.sourceName}
       />
       <CardMedia
         className={classes.media}
         image={props.urlImage}
       />
       <CardContent>
         <Typography variant="body2" color="textSecondary" component="p">
           {props.description}
         </Typography>
       </CardContent>
     </Card>
    );
}
