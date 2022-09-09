import React, { useContext, useState } from "react";
import { globale } from "../../App";

const Button = (props) =>{
    const [page,setPage] = useContext(globale);
    let formName = "";
    console.log(page);
    switch(page){
        case 1: formName+="form";break;
        case 2: formName+="investment_form";break;
        case 3: formName+="investment_plan";break;
    }
       
    const style={
        "width":"154px",
        "height":"48px",
        "backgroundColor":props.bkgcolor,
        "color":props.color,
    }
    return(
        <button type="submit" className="montserrat rounded" form={formName} style={style}>{props.text}</button>
    )
}
export default Button;
