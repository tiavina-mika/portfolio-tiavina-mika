import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

const useStyles = makeStyles({
    title: {
        fontWeight: 700,
    },
    subtitle: {
        color: grey[700]
    },
    date: {
        color: grey[500],
        fontFamily: 'Muli'
    }
});

const Title = ({ size, text, subtitle, date, width }) => {
    const classes = useStyles();

    return (
        <Typography 
            className={clsx(
                classes.title, 
                subtitle? classes.subtitle: '',
                date? classes.date: ''
            )} 
            style={{
                fontSize: size || isWidthDown('sm', width)? 18: 36,
                fontFamily: subtitle? 'Montserrat': 'Comfortaa'
            }}
        >
                { text }
        </Typography>
    );
}

export default withWidth()(Title);
