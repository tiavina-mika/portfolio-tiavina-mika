import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

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

const Title = ({ size, text, subtitle, date }) => {
    const classes = useStyles();

    return (
        <Typography 
            className={clsx(
                classes.title, 
                subtitle? classes.subtitle: '',
                date? classes.date: ''
            )} 
            style={{
                fontSize: size || 36,
                fontFamily: subtitle? 'Montserrat': 'Comfortaa'
            }}
        >
                { text }
        </Typography>
    );
}

export default Title;
