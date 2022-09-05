import React, { useState } from "react";
import { userDatas } from "../../utils";
import Slider from "../Slider/Slider";


const Form1 = ()=>{
    const [data,setData] = useState("");
    
    const returnInfo = (dati)=>{
        setData(dati);
    }

    return(
        <div className="montserrat_alt w-100 mt-[50px]">
            <p className="text-black text-[21px]">How much are you planning to invest in this year?</p>
            <form id="investment_form" onSubmit={()=>alert("ciao")}>
                <Slider funct={returnInfo}/>
            </form>
            {data}
        </div>
    )
}

export default Form1;