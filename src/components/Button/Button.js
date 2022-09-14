/**
 * this is the submit button component, used to renders a button with a fixed measure and "propsable" colors
 * and texts, it uses the "globale" context to read the global state "page", used to modify the refer to 
 * which form is able to submit
 */

import React, { useContext, useState } from "react";
import { globale } from "../../App";

const Button = (props) =>{
    const [page,setPage] = useContext(globale);
    let formName = "";
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
