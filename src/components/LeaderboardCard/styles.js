import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    marginBottom: theme.spacing(1),
    maxWidth: 500,
    margin: "0 auto"
  },
  img: {
    width: 100,
    height: 80,
    borderRadius: "10px",
    alignSelf: "center",
    border: "1px grey solid",
    marginLeft: theme.spacing(1)
  },
  rank: {
    backgroundColor: "red",
    alignSelf: "center",
    width: "30px",
    height: "30px",
    marginLeft: theme.spacing(1),
    border: "1px solid black"
  },
  details: {
    margin: "0 auto"
  },
  content: {
    display: "flex",
    flexDirection: "column"
  },
  score: {
    textAlign: "center"
  },
  username: {
    textAlign: "center"
  }
}));
