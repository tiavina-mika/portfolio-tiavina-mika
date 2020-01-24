import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import RoomIcon from '@material-ui/icons/Room';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import Tag from './tag';

const useStyles = makeStyles({
    text: {
        fontSize: 18,
        fontFamily: 'Montserrat',
        fontWeight: 300,
        color: grey[600]
    },
    tagIcon: {
        fontSize: 18,
        color: grey[600]
    }
});

const Tags = ({ place, genre, mobile, web }) => {
    const classes = useStyles();

    return (
        <Box display="flex" alignItems="flex-end">
            <Tag icon={<RoomIcon className={classes.tagIcon}/>} text={place || 'Antananarivo, Madagascar' } />
            <Tag icon={<LocalOfferIcon className={classes.tagIcon}/>} text={genre} />
            { mobile && <Tag icon={<SmartphoneIcon className={classes.tagIcon}/>} text="Mobile" />}
            { web && <Tag icon={<VideoLabelIcon className={classes.tagIcon}/>} text="Web" />}
        </Box>
    );
}

export default Tags;
