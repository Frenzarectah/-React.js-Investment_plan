import React, { useEffect, useState } from "react";
import '../CheckBtn/CheckBtn.css';


const CheckBtn = (props)=>{
    const [checked,setChecked] = useState(false);
    const onChange = (e) =>{
        localStorage.setItem(e.target.value,!checked);
        setChecked(!checked);
        console.log(localStorage);
    }
    let classes="";
    
    checked?classes="selected":classes="unselected";
    
    return(
        <div className={classes} key={props.key}>
            <input id={props.num} checked={checked} type="checkbox" value={props.descr} onChange={(e)=>onChange(e)}/>
            <label>{props.descr}</label>
        </div>
    )
}
export default CheckBtn;