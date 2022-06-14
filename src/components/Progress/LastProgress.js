import React, { Component, useContext } from 'react';
import '../Progress/Progress.css';
import { globale } from "../../App";
import rect from './assets/Rect_littl.png';
import rect_vert from './assets/rect_vertical.png';


const LastProgress = (props) =>{
    const descr = props.descr;
    let style = {opacity:"0.25"}
    const [page,setPage] = useContext(globale);
    if(props.num <= page) style={opacity:"1"}
    return(
        <div style={style}>
        <div className="text-left flex flex-row text-black md:text-white lg:text-white text-lg montserrat_alt">
                <div id="placeholder" className="flex justify-center items-center">
                    <img style={{width:"11px",height:"11px"}} src={rect}/>
                </div>
                <p className="pl-5 self-center">{descr}</p>
        </div>
        </div>
    )
}
export default LastProgress;