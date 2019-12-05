import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import firebase from "../../firebase";
import NewsCard from "../NewsCard/NewsCard";
import { CircularProgress } from "@material-ui/core";
import BottomScrollListener from "react-bottom-scroll-listener";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function Feed() {
  const classes = useStyles();
  const [newsArticles, setNewsArticles] = useState();
  const [lastVisible, setLastVisible] = useState();
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    try {
      setLoading(true);

      let initialQuery = await firebase.db
        .collection("news")
        .orderBy("publishedAt")
        .limit(5);

      let documentSnapshots = await initialQuery.get();

      let documentData = documentSnapshots.docs.map(document =>
        document.data()
      );

      let last = documentData[documentData.length - 1].publishedAt;

      setLoading(false);
      setNewsArticles(documentData);
      setLastVisible(last);
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveMore = async () => {
    try {
      setRefreshing(true);

      let additionalQuery = await firebase.db
        .collection("news")
        .orderBy("publishedAt")
        .startAfter(lastVisible)
        .limit(5);

      let documentSnapshots = await additionalQuery.get();

      let documentData = documentSnapshots.docs.map(document =>
        document.data()
      );
      let last = documentData[documentData.length - 1].publishedAt;

      setNewsArticles([...newsArticles, ...documentData]);
      setLastVisible(last);
      setRefreshing(false);
    } catch (error) {
      console.log(error);
    }
  };

  const loadingIndicator = refreshing ? (
    <LinearProgress className={classes.bottomLoader} />
  ) : null;

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
        <div>
          {newsCards} {loadingIndicator}
        </div>
        <BottomScrollListener onBottom={() => retrieveMore()} />
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
