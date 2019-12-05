import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    maxWidth: "1024px"
  },
  pageTitle: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 50
  }
}));
