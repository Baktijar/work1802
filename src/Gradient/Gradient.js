import React from "react";
import Controls from "./Controls/Controls";

import "./Gradient.css";

function Gradient(props) {
  const style = {
    background: `linear-gradient(90deg, ${props.color1} 0%, ${
      props.color2
    } 10%, ${props.color3} 20%,${props.color4} 30%,${props.color5} 40%,${
      props.color6
    } 50%,${props.color7} 60%,${props.color8} 100%)`
  };

  return (
    <div className="Home" style={style}>
      <Controls
        color1={props.color1}
        color2={props.color2}
        color3={props.color3}
        color4={props.color4}
        color5={props.color5}
        color6={props.color6}
        color7={props.color7}
        color8={props.color8}
        changeColor1={props.changeColor1}
        changeColor2={props.changeColor2}
        changeColor3={props.changeColor3}
        changeColor4={props.changeColor4}
        changeColor5={props.changeColor5}
        changeColor6={props.changeColor6}
        changeColor7={props.changeColor7}
        changeColor8={props.changeColor8}
      />
    </div>
  );
}

export default Gradient;
