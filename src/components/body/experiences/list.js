import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import Title from './title';
import Content from './content';
import Tags from './tags';
import InProgress from './in-progress';

const useStyles = makeStyles({
    text: {
        fontSize: 18,
        fontFamily: 'Montserrat',
        lineHeight: '2em'
    },
    icon: {
        fontSize: 30,
        color: '#fff'
    },
    link: {
        color: '#8782FF',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline'
        }
    }
});

const List = ({ title, subtitle, post, date, description, genre, repo, web, mobile}) => {
    const classes = useStyles();

    return (
        <Box>
            <Box display="flex" alignItems="center">
                <Title text={title} size={72} />
                <InProgress />
            </Box>
            <Box height={10} width={100} bgcolor={grey[300]} borderRadius={10}></Box>
            <Box display="flex" alignItems="center" my={2}>
                <Title text={post} size={32} subtitle />
            </Box>
            <Box display="flex" alignItems="center">
                <Title text={subtitle} size={38} subtitle />
                <InProgress openSource />
            </Box>
            <Box mt={1}>
                <Title text={date} size={22} date />
            </Box>
            <Box mt={1}>
                <Tags genre={genre} web={web} mobile={mobile} />
            </Box>
            <Box my={5}>
                <Content text="Description du projet" icon={<DescriptionIcon className={classes.icon}/>}>
                    <Typography className={classes.text}>{description}</Typography>
                </Content>
                <Content text="Liens" icon={<LinkIcon className={classes.icon}/>}>
                    <Box display="flex" alignItems="center">
                        <Box mr={2}>
                            <GitHubIcon />
                        </Box>
                        <Box>
                            <a href={repo} className={clsx(classes.link, classes.text)}>{repo}</a>
                        </Box>
                    </Box>
                </Content>
                
            </Box>
        </Box>
    );
}

export default List;
