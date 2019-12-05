import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Domain from "./domain/domain";
import Motion from '../../../components/motion';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#000',
        width: '100%',
        height: '100vh',
        marginTop: 200
    },
})

const DomainContainer = () => {
  const classes = useStyles();

  return (
        <Motion
            className={classes.root}
            initial={{ marginLeft: 6000, opacity: 0 }}
            animate={{ marginLeft: 0, opacity: 1 }}
            // delay= {3.1}
            delay= {0.2}
        >
            <Domain />
        </Motion>
  );
}

export default DomainContainer;
