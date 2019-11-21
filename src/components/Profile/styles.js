import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    maxWidth: "1024px",
    margin: "0 auto"
  },
  button: {
    margin: theme.spacing(1)
  },
  card: {
    margin: theme.spacing(5)
  }
}));
