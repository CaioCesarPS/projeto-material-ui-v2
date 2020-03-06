import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(64),
      height: theme.spacing(16),
      padding: theme.spacing(1),
      marginLeft: theme.spacing(2)
    },
    paper: {
      padding: '10px',
      width: '50%'
    }
  },
}));

export default function Home(){
  const classes = useStyles();

  return(
    <div className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
          <h1>testasasassasas</h1>
        </Paper>
    </div>
  )
}
