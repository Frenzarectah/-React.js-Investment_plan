
import React, {useContext } from 'react';
import '../Progress/Progress.css';
/**
 * this is a component for rendering the non-last elements of the pageInfo array, it changes his
 * style according to the active page of the app (using useContext API for this)
 */
import { globale } from "../../App";
import rect from './assets/Rect_littl.png';
import rect_vert from './assets/rect_vertical.png';

const Progress = (props)=>{    
    const [page,setPage] = useContext(globale);
    let style= {};
    
    (props.num<=page)?style={opacity:"1"}:style={opacity:"0.25"}  //modifying the opacity to differentiate the active/non active pages.
    return(
        <div style={style}>
        <div className="text-left flex flex-row text-black md:text-white lg:text-white text-lg montserrat_alt">
                <div id="placeholder" className="flex justify-center items-center">
                    <img alt="rectangle" className="w-[11px] h-[11px]" src={rect}/>
                </div>
                <p className="pl-5 self-center">{props.descr}</p>
        </div>
                <img alt="vertical rectangle" class="mt-2 ml-3 w-[4px] h-[9px]" src={rect_vert}/>
                <img alt="vertical rectangle" class="mt-2 ml-3 mb-2 w-[4px] h-[9px]" src={rect_vert}/>
        </div>
    )        
}
export default Progress;