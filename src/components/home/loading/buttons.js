import React from "react";
import { makeStyles, darken } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  button: {
    color: '#b7b7b7',
    backgroundColor: '#494949',
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 5,
    textTransform: 'none',
    marginLeft: 10,
    marginRight: 10,
  }
});

const Buttons = ({ onPause, pause, start }) => {
  const classes = useStyles();

  return (
      <Box display="flex" mt={2}>
        <Button className={classes.button} onClick={onPause}>
          { pause ? 'Continue': 'Pause'}
        </Button>
        <Button className={classes.button} onClick={start}>Restart</Button>
      </Box>
  );
};

export default Buttons;
