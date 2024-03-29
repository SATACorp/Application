import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 250
  },
  container: {
    paddingTop: theme.spacing(12),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    maxWidth: 600,
    margin: "0 auto"
  },
  button: {
    margin: theme.spacing(1)
  },
  userCard: {
    fontSize: 20,
    fontFamily: "Roboto"
  },
  pageTitle: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 50
  },
  pageSubtitle: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 35
  },
  profilePic: {
    width: "50%"
  },
  loader: {
    position: "fixed",
    top: "50%",
    left: "50%"
  }
}));
