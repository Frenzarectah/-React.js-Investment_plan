import React from "react";
import '../CheckBtn/CheckBtn.css';


const CheckBtn = (props)=>{
    let className="";
    if(props.checked)className+="selected";
    return(
        <div id="checkBox" className={className}>
            <input id={props.num} checked={props.checked} type="checkbox" value={props.descr} onChange={props.funct}/>
            <label>{props.descr}</label>
        </div>
    )
}
export default CheckBtn;