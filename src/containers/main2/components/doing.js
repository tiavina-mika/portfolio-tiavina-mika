import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Motion from '../../../components/motion';
import Balloon from './doing/balloon';
import Blob from './doing/blob';
import BackgroundBalloon from './doing/background-balloon';

const string = `If I had to define what my passion is in the larger scheme of things, I would define it to be the fact that software is written by people, for people. So things like “customer service” or “team building” are the things that inspire me and drive me to be the best I can be.`

const useStyles = makeStyles({
    root: {
        backgroundColor: '#283141',
        width: '100%',
        height: 1000
    },
    blobContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'SofiaPro-Bold',
        color: '#fff',
        fontSize: 135,
        position: 'absolute',
        top: '155%',
        zIndex: 30
    }

})

const Doing = () => {
    const classes = useStyles();
    return (
        <Motion
            className={classes.root}
            initial={{ marginLeft: 6000, opacity: 0 }}
            animate={{ marginLeft: 0, opacity: 1 }}
            delay= {3}
        >
            {/* {string} */}
            <div className={classes.blobContainer}>
                <BackgroundBalloon />

                <Blob
                    size={650}
                    style={{ boxShadow: 'inset 0px 0px 40px rgba(0,0,0,.2), 0 0 90px rgba(0,0,0,.8)', zIndex:5, top: '130%' }} 
                    content={
                        <Blob
                            size={200}
                            style={{ zIndex:10, backgroundColor: '#01cfcf' }}
                            />
                    }/>
                <Typography variant="h1" className={classes.title}>CE QUE JE PEUX FAIRE</Typography>
            </div>

          
        </Motion>
    )
  }
  
  export default Doing;