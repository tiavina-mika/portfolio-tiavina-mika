import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import Menu from "./nav/menu";
import Logo from "./nav/logo";
import Header from './header';

const useStyles = makeStyles({
    title: {
        fontSize: 150,
        fontFamily: 'Century Gothic Regular',
        fontWeight: 700,
        color: '#fff'
    }
});

const Container = ({ title }) => {
    const classes = useStyles();
        const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const header = document.getElementById("myHeader");
        const scrolled = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
          if (window.pageYOffset > scrolled) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        });
        return () => {
          window.removeEventListener("scroll", scrollCallBack);
        };
      }, []);


    return (
        <Box width="100%">
            <Box position="fixed" top={0} left={0} bottom={0} width="100%" zIndex={3}>
                <Menu dark={scrolled} />
                <Box ml={10} mt={2}>
                    <Logo dark={!scrolled}/>                
                </Box>
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="#1EB47C"> 
                <Typography variant="h1" className={classes.title}>{ title }</Typography>
            </Box>
            <Box>
                <Header />
            </Box>
        </Box>
    );
}

export default Container;
