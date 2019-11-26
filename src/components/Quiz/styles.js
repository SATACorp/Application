import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    margin: theme.spacing(1),
    width: "90%"
  },
  img: {
    height: 80,
    padding: theme.spacing(1)
  }
}));
