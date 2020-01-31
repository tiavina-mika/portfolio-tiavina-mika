import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    title: {
        fontSize: 70,
        fontFamily: 'Century Gothic Regular',
        fontWeight: 700,
    },
    container: {
        boxShadow: '0px 0px 115px #000000a6'
    },
    text: {
        fontFamily: 'Muli',
        fontSize: 20,
        lineHeight: '1.7em'
    },
    img: {
        zIndex: 2
    },
    stickyNav: {
        position:"sticky",
        flexGrow:1,
        top:0,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
    }
});

const Header = ({ id }) => {
    const classes = useStyles();

    return (
        <Box py={5}>
            <Box display="flex" justifyContent="center" alignItems="center" pt={3}> 
                <img src={`${process.env.PUBLIC_URL}/images/web-01.png`} alt="img" className={classes.img}/>
            </Box>
            <Box display="flex" justifyContent="center" mt={-15} id={id}>
                <Box className={classes.container} borderRadius={25} display="flex" flexDirection="column" alignItems="center" width="50%" px={8} pt={20} pb={5}>
                    <Box>
                        <Typography variant="h1" className={classes.title}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </Typography>                       
                    </Box>
                    <Box py={3}>
                        <Typography className={classes.text}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam
                        </Typography>                        
                    </Box>
                </Box>            
            </Box>
        </Box>
    );
}

export default Header;
