import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const useStyles = makeStyles(theme => ({
  container: {},
  button: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  button: {
    margin: theme.spacing(1)
  },
  card: {
    maxWidth: 500,
    margin: 15
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  loader: {
    position: "fixed",
    top: "50%",
    left: "50%"
  }
}));
