import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    marginBottom: theme.spacing(1),
    maxWidth: 500
  },
  img: {
    height: 80,
    padding: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  }
}));
