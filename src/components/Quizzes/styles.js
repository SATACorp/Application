import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    maxWidth: "1024px"
  },
  pageTitle: {
    color:"white",
    fontFamily:"Roboto",
    fontSize: 50
  },
}));
