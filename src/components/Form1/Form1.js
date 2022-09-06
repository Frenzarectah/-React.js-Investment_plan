import React, { useState } from "react";
import { userDatas } from "../../utils";
import Slider from "../Slider/Slider";

const Form1 = ()=>{
    const [min,setMin] = useState("");
    const [max,setMax] =useState("");
    const returnInfo = (min,max)=>{
        setMin(min);
        setMax(max);
    }

    return(
        <div className="montserrat_alt w-100 mt-[50px]">
            <p className="text-black text-[21px]">How much are you planning to invest in this year?</p>
            <form id="investment_form" onSubmit={()=>alert("ciao")}>
                <Slider funct={returnInfo}/>
            </form>
            {min} {max}
        </div>
    )
}

export default Form1;