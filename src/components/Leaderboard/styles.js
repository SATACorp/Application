import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    alignItems: "center"
  }, 
  
  checkUser: {
    margin: theme.spacing(3),
    alignContent: "center"
  }
}));
