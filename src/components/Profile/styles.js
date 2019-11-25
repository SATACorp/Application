import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 250,
  },
  container: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    maxWidth: 700,
    margin: "0 auto"
  },
  button: {
    margin: theme.spacing(1)
  },
  card: {
    margin: theme.spacing(5)
  },
  header: {
    fontSize:50,
    color: 'blue',
    fontFamily: 'Roboto'
  },
  secondCard: {
    fontSize:25,
    fontFamily: 'Roboto'
  },
  thirdCard: {
    fontSize:20,
    fontFamily:'Roboto'
  }
}));
