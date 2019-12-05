import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Motion from '../../../components/motion';
import Blob from './doing/blob';
import TextAnimation from './doing/textAnimation';

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
    titleContainer: {
        position: 'absolute',
        top: '155%',
        textJustify: 'center',
        zIndex: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'SofiaPro-Bold',
        color: '#fff',
        fontSize: 135,
        // width: window.innerWidth - 250
    },
    activeTitle: {
        color: '#01cfcf'
    },
    textLoop: {
        width: 700
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
            <div className={classes.blobContainer}>
                <Blob
                    size={650}
                    style={{ boxShadow: 'inset 0px 0px 40px rgba(0,0,0,.2), 0 0 90px rgba(0,0,0,.8)', zIndex:5, top: '130%' }} 
                    content={
                        <>
                        <Blob
                            size={200}
                            style={{ zIndex:10, backgroundColor: '#01cfcf' }}
                            />
                            {/* <BackgroundBalloon /> */}
                        </>
                    }/>
                <TextAnimation /> 
            </div>

          
        </Motion>
    )
  }
  
  export default Doing;