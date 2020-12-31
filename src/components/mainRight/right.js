import Tooltip from '@material-ui/core/Tooltip';
import Avatar from "@material-ui/core/Avatar";
import { Link } from '@material-ui/core';
import { Context } from 'contexts/context'
import React, { useContext } from 'react'
import Paper from './paper/Paper';
import { makeStyles } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import ClearIcon from '@material-ui/icons/Clear';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
}));

function Right() {
  const { setContent } = useContext(Context);
  const classes = useStyles();

  const handleDeleteDate = (event) => {
    event.preventDefault();
    localStorage.removeItem('dataLocal');
    setContent({
      header: {},
      experience: { descrition: ['', '', ''], descrition2: ['', ''] },
      education: {},
      skill: []
    });
  };
  // const handleSaveToPDF = (event) => {
  //   event.preventDefault();
  //   window.print();
  // }
  return (
    <div className="right">
      <div className={classes.root}>
        <Link href="#" onClick={handleDeleteDate}>
          <Tooltip title="Delete All Data" placement="left-start">
            <Avatar className={classes.pink}>
              <ClearIcon />
            </Avatar>
          </Tooltip>
        </Link>
        <Link href="/" >
          <Tooltip title="view" placement="right-start">
            <Avatar className={classes.green}>
              <VisibilityIcon />
            </Avatar>
          </Tooltip>
        </Link>
      </div>
      <Paper />
    </div>
  )
}

export default Right
