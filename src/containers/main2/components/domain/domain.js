import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircleGroup from "./circle-group";
import Circle from "./circle";

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
})

const valuesCyV = "122; 124; 127; 124; 122"

const Domain = () => {
  const classes = useStyles();
  const [zoom, setZoom] = React.useState(0)
  const onWheel = e => {
    const { pageX, pageY, deltaY } = e;

    deltaY > 0 ? setZoom(zoom + 1): setZoom(zoom - 1)
    console.log(zoom * 10)
  }

  return (
    <div onWheel={onWheel}>
      <svg viewBox="0 0 300 300" className={classes.container}>
          <line x1="20" x2="20" y1="0" y2="300" style={{stroke: '#404040', strokeWidth:"0.4"}}/>
          {/* <g>
            <circle r="100" cx="150" cy="150" className={classes.circle1}/>
            <circle r={zoom? 80 + (zoom * 10): 80 - (zoom * 10)} cx="150" cy="150" className={classes.circle2}/>
            <text x="110" y="100" className={classes.text}>Development -</text>
          </g> */}
            <circle r="28" cx="115" cy="122" className={classes.circleBg}/>

          <g>
              <CircleGroup
                  valuesCy="80; 82; 85; 82; 80"
                  cx="115"
                  durR="4s"
                  durCyOut="4.5s"
                  name="top"
                  text="Design -"
                  cy="70"
              />  
          </g>
          <g>
              <CircleGroup
                  valuesCy={valuesCyV}
                  durR="3.5s"
                  cx="72"
                  name="left"
                  text="Web -"
                  cy="110"
              />
          </g>
          <g>
              <CircleGroup
                  valuesCy={valuesCyV}
                  durR="3.7s"
                  cx="152"
                  name="right"
                  text="Mobile -"
                  cy="110"
              />
          </g>
          <g>
              <CircleGroup
                  valuesCy="168; 170; 173; 170; 168"
                  cx="115"
                  durR="4.2s"
                  durCyOut="4.8s"
                  name="bottom"
                  text="Base de données -"
                  cy="160"
              />  
          </g>
  
          <line x1="80" x2="80" y1="0" y2="300" style={{stroke: '#404040', strokeWidth:"0.4"}}/>
      </svg>
    </div>
  );
}

export default Domain;
