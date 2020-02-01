import React from 'react';
import clsx from 'clsx';
import { makeStyles, lighten } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import DatabaseIcon from 'mdi-react/DatabaseIcon';
import HomeIcon from 'mdi-react/HomeIcon';
import AccountCardDetailsIcon from 'mdi-react/AccountCardDetailsIcon';
import Tooltip from '@material-ui/core/Tooltip';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import Logo from './nav/logo';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        width: '100%',
        boxShadow: '1px 1px 8px #b2b2b2',
        backgroundColor: '#fff',
        zIndex: 250
    },
    rootLg: {
      justifyContent: 'center',
    },
    rootXs: {
      justifyContent: 'space-between',
    },
    icon: {
        color: lighten('#403b41', 0.3),
    },
    link: {
        fontFamily: 'Montserrat',
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#403b41',
        fontWeight: 300,
        textDecoration: 'none',
        padding: '20px 40px',
        '&:hover': {
          color: '#db4b51'
        }
    },
    button: {
      '&:hover': {
        backgroundColor: 'transparent'
      }
    }
});

const useStylesBootstrap = makeStyles(theme => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));

const BootstrapTooltip = props => {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

const Header = ({ onClick, width }) => {
    const classes = useStyles();

    if (!isWidthUp('md', width)) {
        return (
          <div className={clsx(classes.root, classes.rootXs)}>
              <Box pl={2}>
                <Logo />
              </Box>
              <Box>
                  <BootstrapTooltip title="Accueil">
                      <Button className={classes.button}  onClick={onClick}>
                        <HomeIcon className={classes.icon} size={30} />
                      </Button>
                  </BootstrapTooltip>
                  <AnchorLink href='#experiences'>
                    <BootstrapTooltip title="Expériences">
                        <Button className={classes.button}>
                          <DatabaseIcon className={classes.icon} size={30} />
                        </Button>
                    </BootstrapTooltip>                    
                  </AnchorLink>
                  <AnchorLink href='#about'>
                    <BootstrapTooltip title="A Propos">
                        <Button className={classes.button}>
                          <AccountCardDetailsIcon className={classes.icon} size={30} />
                        </Button>
                    </BootstrapTooltip>
                  </AnchorLink>               
              </Box>
          </div>
        )
    }

    return (
      <div className={clsx(classes.root, classes.rootLg)}>
        <Logo />
        <Button className={classes.link} onClick={onClick}>Accueil</Button>
        <AnchorLink href='#experiences' className={classes.link}>Expériences</AnchorLink>
        <AnchorLink href='#about'className={classes.link}>A propos</AnchorLink>
      </div>
    )
  }
  
  export default withWidth()(Header);
  