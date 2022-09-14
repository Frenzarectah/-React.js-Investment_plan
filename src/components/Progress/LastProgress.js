import React, { useContext } from 'react';
import '../Progress/Progress.css';
import { globale } from "../../App";
import rect from './assets/Rect_littl.png';

//this is a component for rendering the last element of the Pages Array

const LastProgress = (props) =>{
    
   const [page,setPage] = useContext(globale);
   let style= {};
   
   (props.num<=page)?style={opacity:"1"}:style={opacity:"0.25"}; //modifying the opacity to differentiate the active/non active pages.  
    return(
        <div style={style}>
        <div className="text-left flex flex-row text-black md:text-white lg:text-white text-lg montserrat_alt">
                <div id="placeholder" className="flex justify-center items-center">
                    <img alt="recangle" className="w-[11px] h-[11px]" src={rect}/>
                </div>
                <p className="pl-5 self-center">{props.descr}</p>
        </div>
        </div>
    )
}
export default LastProgress;