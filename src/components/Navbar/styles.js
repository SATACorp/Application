import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    width: "100%",
    position: "fixed",
    bottom: 0
  },
  icon: {}
}));
