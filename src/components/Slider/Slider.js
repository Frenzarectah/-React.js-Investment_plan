import React from "react";

const Slider = () =>{
    return(
        <div className="mt-[20px] w-full">
              <input id="slider" type="range" min="10" max="100" value="0" step="20000" className="w-full slider" onChange={console.log("mio")}>

              </input>
        </div>
    )
}
export default Slider;