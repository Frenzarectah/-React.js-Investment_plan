/**
 * this renders the Radio button, it has not an internal state because the RadioBtn has to change their state together 
 * at the same time (one checked,one dechecked) so my choice is to manage them into the father's component (Form1)
 */

import React from "react";
import { useState } from "react";
import '../RadioBtn/RadioBtn.css';

const RadioBtn = (props)=>{ 
    let className="";
    props.checked?className+="selected":className+="unselected";
    return(
        <div id="input__content" style={{width:"136px",height:"48px",borderRadius:"5px"}} className={className}>
            <input type="radio" id={props.id} value={props.value} checked={props.checked} onClick={props.funct}/>
            <p className="flex self-center">{props.id}</p>
        </div>
)}
export default RadioBtn;