import React, { useContext } from "react";
import { globale } from "../../App";
import HelpModal from "../Modals/HelpModal";
import { useState } from "react";

//component which renders the headline above the app, on the right side

const Headline = () =>{
    const [page,setPage] = useContext(globale);
    const [open,setOpen] = useState(false);
    return(
        <div className='flex flex-row justify-between w-full'>
            <div className='text-[#A4AEB4]'>STEP {page} OF 3</div>
            <div>Lost or have trouble? <a onClick={()=>setOpen(!open)}className='text-[#2696E8] hover:underline'>Get Help!</a></div>
            <HelpModal visibility={open}/>
        </div>
    )
}
export default Headline;