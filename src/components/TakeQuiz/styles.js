import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column"
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));