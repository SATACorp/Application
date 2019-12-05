import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: theme.spacing(1),
    width: 450
  },
  img: {
    width: "50px",
    height: "50px",
    borderRadius: "10px",
    padding: theme.spacing(1)
  },
  button: {},
  userContent: {
    display: "flex",
    flexDirection: "column"
  }
}));
