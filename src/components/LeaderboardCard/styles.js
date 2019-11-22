import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    margin: theme.spacing(1)
  },
  img: {
    width: 100,
    padding: theme.spacing(1)
  }
}));
