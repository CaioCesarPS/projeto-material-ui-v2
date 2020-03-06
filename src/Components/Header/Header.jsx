import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    listStyle: 'none',
    color: 'white',
  },
  AppBarColor: {
      background: 'black'
  },
  buttonColor: {
    border: '1px solid white'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBarColor}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} component={Link} to='/'>
            News
          </Typography>
          <Button color="inherit" component={Link} to='/'>home</Button>
          <Button color="inherit" component={Link} to='/about'>about</Button>
          <Button color="inherit" component={Link} to='/login'>Login</Button>
          <MenuItem>
            <AccountCircle />
        </MenuItem>
        </Toolbar>
      </AppBar>
    </div>
  );
}