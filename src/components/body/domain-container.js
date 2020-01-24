import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Domain from "./domain/domain";
import PieChart from "./domain/pie-chart";
import Motion from '../motion';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#000',
        width: '100%',
        // height: '100vh',
        // marginTop: 200
    },
    title: {
        fontSize: 50,
        fontFamily: 'Comfortaa',
        fontWeight: 700,
        color: '#fff'
    }
})

const DomainContainer = () => {
  const classes = useStyles();

  return (
        <Motion
            className={classes.root}
            initial={{ marginBottom: 100, opacity: 0 }}
            animate={{ marginTop: 0, opacity: 1 }}
            delay= {3}
        >
            <Domain />
            {/* <PieChart /> */}
        </Motion>
  );
}

export default DomainContainer;
