import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import firebase from "../../firebase";
import NewsCard from "../NewsCard/NewsCard";
import { CircularProgress } from "@material-ui/core";
import LazyLoad from "react-lazyload";

export default function Feed() {
  const classes = useStyles();
  const [newsArticles, setNewsArticles] = useState();

  // let newsUrl =
  //   "https://newsapi.org/v2/top-headlines?country=us&apiKey=0ae0c8f3d55f44f19d14a61a4c1cb105";

  useEffect(() => {
    let articles = [];
    firebase.db
      .collection("news")
      .get()
      .then(function(snapshot) {
        snapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          articles.push(doc.data());
          console.log(doc.data().url);
        });
        setNewsArticles(articles);
      });
  }, []);

  if (newsArticles != null) {
    const newsCards = newsArticles.map((data, index) => (
      <NewsCard
        url={data.url}
        key={index}
        title={data.title}
        sourceName={data.source.name}
        urlImage={data.urlToImage}
        description={data.description}
      />
    ));
    return (
      <div className={classes.container}>
        <div>{newsCards}</div>
      </div>
    );
  } else {
    return (
      <div className={classes.loader}>
        <CircularProgress />
      </div>
    );
  }
}
