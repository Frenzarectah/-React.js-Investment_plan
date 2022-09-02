import React from "react";

const Button = (props) =>{
    const style={
        "width":"154px",
        "height":"48px",
        "backgroundColor":props.bkgcolor,
        "color":props.color,
    }
    return(
        <button className="montserrat" style={style} onClick={props.funct}>{props.text}</button>
    )
}
export default Button;