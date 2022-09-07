import React, { useContext, useState } from "react";
import { globale } from "../../App";

const Button = (props) =>{
    const [page,setPage] = useContext(globale);
    let form = "";

    page==1?form="form":form="investment_form";    
    
    const style={
        "width":"154px",
        "height":"48px",
        "backgroundColor":props.bkgcolor,
        "color":props.color,
    }
    return(
        <button type="submit" className="montserrat rounded" form={form} style={style}>{props.text}</button>
    )
}
export default Button;
