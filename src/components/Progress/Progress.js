import React, {useContext } from 'react';
import '../Progress/Progress.css';
//import { globale } from "../../App";
import rect from './assets/Rect_littl.png';
import rect_vert from './assets/rect_vertical.png';


const Progress = (props)=>{    
    const descr = props.descr;
    let style = {opacity:"0.25"}
    //const [page,setPage] = useContext(globale);
    //if(props.num <= page) style={opacity:"1"}
    return(
        <div style={{opacity:"1"}}>
        <div className="text-left flex flex-row text-black md:text-white lg:text-white text-lg montserrat_alt">
                <div id="placeholder" className="flex justify-center items-center">
                    <img alt="rectangle" style={{width:"11px",height:"11px"}} src={rect}/>
                </div>
                <p className="pl-5 self-center">{descr}</p>
        </div>
                <img alt="vertical rectangle" class="mt-2 ml-3" style={{width:"4px",height:"9px"}} src={rect_vert}/>
                <img alt="vertical rectangle" class="mt-2 ml-3 mb-2" style={{width:"4px",height:"9px"}} src={rect_vert}/>
        </div>
    )        
}
export default Progress;