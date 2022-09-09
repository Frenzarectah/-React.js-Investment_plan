import React from "react";
import CheckBtn from "../CheckBtn/CheckBtn";
import { useState } from "react";
import ResumeModal from "../Modals/ResumeModal";
const Form2 = () =>{
    const [visible,setVisible] = useState(false);
    const submittino = event=>{
        event.preventDefault();
        alert(localStorage["name"]);
        setVisible(true);
    }
    const checkList1 = ["Single Family","Residential Multifamily","Commercial Retail","Commercial Industrial"]
    const checkList2 = ["Commercial Hospitality","Commercial Warehousing","Commercial Office","Other"];
    return(
    <>
    <p className="montserrat_alt text-[21px] text-black">What kind of real estate are you interested in?</p>
    <form id="investment_plan" className="flex flex-col" onSubmit={(e)=>submittino(e)}>
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
    </form>
    <ResumeModal visibility={visible} storage={localStorage}/>
    </>
)}

export default Form2;

//<CheckBtn  num="0" descr={checkList1[0]} checked={check} funct={()=>setCheck(!check)}/>