import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircleGroup from "./circle-group";
import Text from "./text";
import MainTitle from "./main-title";

const useStyles = makeStyles({
    container: {
      backgroundColor: '#000'
    },
    shadow: {
      fill: 'none',
      stroke: '#fff',
      strokeWidth: '0.1px'
    },
    circle3: {
      fill: 'red',
      stroke: '#40A9F3',
      strokeWidth: '0.1px'
    },
    text: {
      fill: '#fff',
      fontSize: 8
    },
    circleBg: {
      fill: 'none',
      stroke: '#606060',
      strokeDasharray: 1,
      strokeWidth: 0.2
    },
    lines: {
      stroke: '#404040', 
      strokeWidth:"0.4"
    },
    animatedLines: {
      stroke: '#31BCB1',
      strokeWidth:"0.4"
    },
})

const valuesCyV = [122, 124, 127, 124, 122];

const Domain = () => {
  const classes = useStyles();

  return (
    <div>
      <svg viewBox="0 0 300 250" className={classes.container}>
          <line x1="20" x2="20" y1="0" y2="250" className={classes.lines}/>
          <MainTitle x="55" y="20"/>
          {/* <line x1={line.x1} x2={line.x2} y1={line.y1} y2={line.y2} className={classes.lines}/> */}
          {/* <g>
            <circle r="100" cx="150" cy="150" className={classes.circle1}/>
            <circle r={zoom? 80 + (zoom * 10): 80 - (zoom * 10)} cx="150" cy="150" className={classes.circle2}/>
            <text x="110" y="100" className={classes.text}>Development -</text>
          </g> */}
            <circle r="28" cx="115" cy="122" className={classes.circleBg}/>
            <g>
                <CircleGroup
                    valuesCy={[80, 82, 85, 82, 80]}
                    cx="115"
                    durR="4"
                    durCyOut="4.5"
                    name="top"
                    text="Design -"
                    cy="70"
                    description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie"
                />  
            </g>
            <g>
                <CircleGroup
                    valuesCy={valuesCyV}
                    durR="3.5"
                    cx="72"
                    name="left"
                    text="Web -"
                    cy="110"
                    description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie"
                />
            </g>
            <g>
                <CircleGroup
                    valuesCy={valuesCyV}
                    durR="3.7"
                    cx="152"
                    name="right"
                    text="Mobile -"
                    cy="110"
                    description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie"
                />
            </g>
            <g>
                <CircleGroup
                    valuesCy={[168, 170, 173, 170, 168]}
                    cx="115"
                    durR="4.2"
                    durCyOut="4.8"
                    name="bottom"
                    text="Base de données -"
                    cy="160"
                    description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie"
                />  
            </g>
    
            <line x1="80" x2="80" y1="0" y2="250" className={classes.lines}/>
            <line x1="180" x2="180" y1="0" y2="250" className={classes.lines}/>
            <line x1="260" x2="260" y1="0" y2="250" className={classes.lines}/>
            <Text x="210" y="70"/>
        </svg>
    </div>
  );
}

export default Domain;
