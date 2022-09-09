import React from "react";
import CheckBtn from "../CheckBtn/CheckBtn";
import { useState } from "react";
const Form2 = () =>{
    const checkList1 = ["Single Family","Residential Multifamily","Commercial Retail","Commercial Industrial"]
    const checkList2 = ["Commercial Hospitality","Commercial Warehousing","Commercial Office","Other"];
    return(
    <>
    <p className="montserrat_alt text-[21px] text-black">What kind of real estate are you interested in?</p>
    <div id="wrapper" className="flex flex-col">
        <div className="flex flex-row">
            {checkList1.map((item) =>
                <CheckBtn key={checkList1.indexOf(item)} descr={item} />
            )}
        </div>
        <div className="flex flex-row">
            {checkList2.map((item) =>
                <CheckBtn key={checkList2.indexOf(item)} descr={item} />
            )}    
        </div>
    </div>
    </>
)}

export default Form2;

//<CheckBtn  num="0" descr={checkList1[0]} checked={check} funct={()=>setCheck(!check)}/>