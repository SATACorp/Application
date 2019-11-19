import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import firebase from "../../firebase";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function NewsCard() {
  const classes = useStyles();
  const [newsArticle, setNewsArticles] = useState();

  let newsUrl =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=0ae0c8f3d55f44f19d14a61a4c1cb105";

  useEffect(() => {
    fetch(newsUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data.articles);
        setNewsArticles(data.articles);
      });
  }, []);

  useEffect(() => {
    logArticlesArray();
  }, []);

  function logArticlesArray() {
    console.log(newsArticle);
  }

  if (newsArticle != null) {
    return (
      <Card className={classes.card}>
        <CardHeader
          title={newsArticle[0].title}
          subheader={newsArticle[0].source.name}
        />
        <CardMedia
          className={classes.media}
          image={newsArticle[0].urlToImage}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {newsArticle[0].description}
          </Typography>
        </CardContent>
      </Card>
    );
  } else {
    return <div>News Card</div>;
  }
}
