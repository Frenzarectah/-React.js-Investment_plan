import React from "react";
import CheckBtn from "../CheckBtn/CheckBtn";
import { useState } from "react";
const Form2 = () =>{
    const [check,setCheck] =useState(false);
    const checkList = ["Single Family","Residential Multifamily","Commercial Retail","Commercial Industrial",
                        "Commercial Hospitality","Commercial Warehousing","Commercial Office","Other"];
    return(
    <>
    <p className="montserrat_alt text-[21px] text-black">What kind of real estate are you interested in?</p>
    <div id="wrapper" className="flex flex-col">
        <div className="flex flex-row">
            <CheckBtn  num="0" descr={checkList[0]} checked={check} funct={()=>setCheck(!check)}/>
        </div>
        <div className="flex flex-row">

        </div>
    </div>
    </>
)}

export default Form2;