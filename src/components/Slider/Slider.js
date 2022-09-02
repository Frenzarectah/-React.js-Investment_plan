import React, { useState } from "react";
import './slider.css';

const Slider = () =>{
    const [valuerMin, setValuerMin] = useState();
    const [valuerMax,setValuerMax] = useState();
    const interval = ["10.000","50.000","100.000","200.000","500.000","1.000.000"];
    return(
        <div className="mt-[20px] w-full">
              <div className="w-full flex flex-row text-[#A4AEB4]">
                <div className="w-1/2">From:</div>
                <div className="w-1/2">To:</div>
              </div>
              <div className="w-full flex flex-row mb-[40px]">
                <input type="text" className="w-1/2 text-black" placeholder={valuerMin} />
                <input type="text" className="w-1/2 text-black" placeholder={valuerMax} />
              </div>
              <input id="slider" type="range" min="0" max="5" step="1" className="w-full slider" list="valuers" onChange={(e)=>setValuerMin(interval[e.target.value])} />
              <input id="slider1" type="range" min="0" max="5" step="1" className="w-full slider" list="valuers" onChange={(e)=>setValuerMax(interval[e.target.value])}/>
              <datalist id="valuers" className="flex flex-row justify-between mt-[10px] text-[#35A0EE] montserrat">
                <option value="0" label="10.000$"></option>
                <option value="1" label="50.000$"></option>
                <option value="2" label="100.000$"></option>
                <option value="3" label="200.000$"></option>
                <option value="4" label="500.000$"></option>
                <option value="5" label="1.000.000$"></option>
              </datalist>
        </div>
    )
}
export default Slider;