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

  // let newsUrl =
  //   "https://newsapi.org/v2/top-headlines?country=us&apiKey=0ae0c8f3d55f44f19d14a61a4c1cb105";

  useEffect(() => {
    retrieveData();
    console.log(newsArticles);
  }, []);

  const retrieveData = async () => {
    try {
      // Set State: Loading
      setLoading(true);
      console.log("Retrieving Data");
      // Cloud Firestore: Query
      let initialQuery = await firebase.db
        .collection("news")
        .orderBy("publishedAt")
        .limit(5);
      // Cloud Firestore: Query Snapshot
      let documentSnapshots = await initialQuery.get();
      // Cloud Firestore: Document Data
      let documentData = documentSnapshots.docs.map(document =>
        document.data()
      );
      // Cloud Firestore: Last Visible Document (Document ID To Start From For Proceeding Queries)
      let last = documentData[documentData.length - 1].publishedAt;
      // Set State
      setLoading(false);
      setNewsArticles(documentData);
      setLastVisible(last);
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveMore = async () => {
    try {
      // Set State: Refreshing
      setRefreshing(true);
      console.log("Retrieving additional Data");
      // Cloud Firestore: Query (Additional Query)
      let additionalQuery = await firebase.db
        .collection("news")
        .orderBy("publishedAt")
        .startAfter(lastVisible)
        .limit(5);
      // Cloud Firestore: Query Snapshot
      let documentSnapshots = await additionalQuery.get();
      // Cloud Firestore: Document Data
      let documentData = documentSnapshots.docs.map(document =>
        document.data()
      );
      // Cloud Firestore: Last Visible Document (Document ID To Start From For Proceeding Queries)
      let last = documentData[documentData.length - 1].publishedAt;
      // Set State

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
