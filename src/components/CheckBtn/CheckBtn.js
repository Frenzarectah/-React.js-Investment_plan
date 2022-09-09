import React from "react";
import '../CheckBtn/CheckBtn.css';


const CheckBtn = (props)=>{
    let classes="";
    props.checked?classes="selected":classes="unselected";
    return(
        <div id="checkBox" className={classes}>
            <input id={props.num} checked={props.checked} type="checkbox" value={props.descr} onChange={props.funct}/>
            <label>{props.descr}</label>
        </div>
    )
}
export default CheckBtn;