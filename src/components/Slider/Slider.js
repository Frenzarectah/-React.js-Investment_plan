import React, { useState } from "react";
import './slider.css';

const Slider = () =>{
    const [valuer, setValuer] = useState(2);
    const interval = ["10.000","50.000","100.000","200.000","500.000","1.000.000"];
    return(
        <div className="mt-[20px] w-full">
              <input id="slider" type="range" min="0" max="5" step="1" className="w-full slider" list="valuers" onChange={(e)=>setValuer(interval[e.target.value])} />
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