/**
 * This is the component that renders the last page of the App Form, it includes a list of CheckBtns components
 * and the modal which returns the summary of all the user's choice.
 * It'll being rendered after the click of the submit button for the last time.
 */
import {React, useState} from "react";
import CheckBtn from "../CheckBtn/CheckBtn";
import ResumeModal from "../Modals/ResumeModal";
const Form2 = () =>{
    const [visible,setVisible] = useState(false);
    
    const submittino = event=>{
        event.preventDefault();
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
    <ResumeModal visibility={visible}/>
    </>
)}

export default Form2;