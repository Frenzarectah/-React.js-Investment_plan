import React, { useContext, useState } from "react";
import { globale } from "../../App";

const Button = (props) =>{
    const [page,setPage] = useContext(globale);
    let Form = "form";

    page==1?Form="form":Form="investment_form";    
    
    const style={
        "width":"154px",
        "height":"48px",
        "backgroundColor":props.bkgcolor,
        "color":props.color,
    }
    return(
        <button className="montserrat rounded" form={Form} style={style}>{props.text}</button>
    )
}
export default Button;
