import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        transform: `translate(${this.props.from[0]}px, ${
          this.props.from[1]
        }px) rotate(${Math.random() * 360}deg)`
      }
    };
    this.setStyle = this.setStyle.bind(this);
  }

  componentDidMount() {
    setTimeout(this.setStyle, 1);
  }

  setStyle() {
    const movingStyle = `translate(${Math.random() *
      window.innerHeight *
      2}px, ${Math.random() * window.innerWidth * 2}px) rotate(${Math.random() *
      360}deg)`;
    const time = this.props.time ? this.props.time : 20;
    const size = this.props.size ? this.props.size : "150px";
    const style = {
      position: "absolute",
      zIndex: "-1",
      transform: movingStyle,
      transition: `transform ${time}s ease-out`,
      MsTransform: movingStyle,
      MsTransition: `transform ${time}s ease-out`,
      Webkitransform: movingStyle,
      WebkitTransition: `transform ${time}s ease-out`,
      overflow: "visible",
      willChange: "transform"
    };
    const imgSize = {
      width: size,
      height: "auto"
    };
    this.setState({
      style: style,
      size: imgSize
    });
    setTimeout(this.setStyle, time * 1000);
  }

  render() {
    const { style, size } = this.state;

    return (
      <div style={style} >
        <img style={size} srcSet={this.props.what} alt="img" />
      </ div>
    );
  }
}

class Sky extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: []
    };
    this.movement = this.movement.bind(this);
  }

  componentDidMount() {
    const many = this.props.how;
    const temp_moves = [];
    for (let i = 0; i < many; i++) {
      temp_moves.push(this.movement());
    }
    this.setState({
      moves: temp_moves
    });
  }

  movement() {
    const rotation = Math.floor((Math.round(Math.random()) * 2 - 1) * 600);
    const fromX = Math.floor(Math.random() * window.innerWidth);
    const fromY = Math.floor(Math.random() * window.innerHeight * 1.5);
    const toX = Math.floor(
      Math.random() * window.innerWidth * (Math.round(Math.random()) * 2 - 1)
    );
    const toY = Math.floor(
      Math.random() *
        window.innerHeight *
        1.5 *
        (Math.round(Math.random()) * 2 - 1)
    );
    const temp = {
      rotation,
      fromX,
      fromY,
      toX,
      toY
    };
    return temp;
  }

  render() {
    const items = this.props.images;
    const outerStyle = {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      margin: "0",
      padding: "0",
      overflow: "hidden",
      zIndex: "-1",
      background: this.props.background ? this.props.background : ""
    };

    return (
      <div style={outerStyle} id="sky">
        {this.state.moves.map((e, i) => {
          const conditional = Math.floor(
            Math.random() * Object.keys(items).length
          );

          return (
            <Item
              what={items[conditional]}
              from={[e.fromX, e.fromY]}
              to={[e.toX, e.toY]}
              rotation={e.rotation}
              size={this.props.size}
              time={this.props.time}
              key={i}
            />
          );
        })}
      </div>
    );
  }
}

const BackgroundBalloon = () => {
    const images = {
        0: `${process.env.PUBLIC_URL}/images/bubble-blue-0.png`,
        1: `${process.env.PUBLIC_URL}/images/bubble-blue-1.png`,
        2: `${process.env.PUBLIC_URL}/images/bubble-blue-2.png`,
        3: `${process.env.PUBLIC_URL}/images/bubble-blue-3.png`,
        4: `${process.env.PUBLIC_URL}/images/bubble-blue-4.png`,
        5: `${process.env.PUBLIC_URL}/images/bubble-blue-5.png`,
    };
    return (
      <div style={{ zIndex: 20000}}>
        <Sky
          images={images}
          how={100}
          size={"100px"}
          time={30}
        />
      </div>
    );
}

export default BackgroundBalloon;
