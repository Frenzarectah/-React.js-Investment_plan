/**
 * this component renders both of input radio selectors, it has only one state because the two radio
 * needs to be treated as two different alternatives of the same form "field".
 * State is also used to style the component in two different ways by "classes" var.
 */

import React, { useState } from "react";
import '../CheckBtn/CheckBtn.css';

const CheckBtn = (props)=>{
    const [checked,setChecked] = useState(false);
    
    const onChange = (e) =>{
        localStorage.setItem(e.target.value,!checked);
        setChecked(!checked);
    }
    
    let classes="";
    checked?classes="selected":classes="unselected";
    //inserirlo direttamente nella parte di rendering
    return(
        <div className={classes}>
            <input checked={checked} type="checkbox" value={props.descr} onChange={(e)=>onChange(e)}/>
            <label>{props.descr}</label>
        </div>
    )
}
export default CheckBtn;