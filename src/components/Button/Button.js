/**
 * this is the submit button component, used to renders a button with a fixed measure and "propsable" colors
 * and texts, it uses the "globale" context to read the global state "page", used to modify the refer to 
 * which form is able to submit
 */

import React, { useContext } from "react";
import { globale } from "../../App";
import { pageInfo } from "../../utils";

const Button = (props) =>{
    const [page] = useContext(globale);
    
    const style={
        "width":"154px",
        "height":"48px",
        "backgroundColor":props.bkgcolor,
        "color":props.color,
    }
    return(
        <button type="submit" className="montserrat rounded" form={pageInfo[page].title} style={style}>{props.text}</button>
    )
}
export default Button;
