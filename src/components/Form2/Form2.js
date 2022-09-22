/**
 * This is the component that renders the last page of the App Form, it includes a list of CheckBtns components
 * and the modal which returns the summary of all the user's choice.
 * It'll being rendered after the click of the submit button for the last time.
 */
import {React, useState} from "react";
import CheckBtn from "../CheckBtn/CheckBtn";
import ResumeModal from "../Modals/ResumeModal";
import { checkList } from "../../utils";
const Form2 = () =>{
    const [visible,setVisible] = useState(false);
    
    const submitting = event=>{
        event.preventDefault();
        setVisible(true);
    }
   
    //gestirlo a livello di templating e fuori dal componente
    return(
    <div className="h-[420px]">
        <p className="montserrat_alt text-[21px] text-black">What kind of real estate are you interested in?</p>
        <form id="Investment details" className="flex flex-col" onSubmit={(e)=>submitting(e)}>
            <div className="w-[750px] flex flex-rown flex-wrap">
                {checkList.map((item,index) =>
                    <CheckBtn key={index} descr={item} />
                )}
            </div>
        </form>
    <ResumeModal visibility={visible}/>
    </div>
)}

export default Form2;