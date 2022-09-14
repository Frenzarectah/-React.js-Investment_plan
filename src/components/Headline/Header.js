/**
 * this is the Header component to render the namesake section of the webapp, it includes the bookmark which indicates
 * the page where the user is placed to (it implements "globale" context to reach the global state "page").
 * Also, it includes the HelpModal component in order to render the Help popup by clicking "Get Help!" hypertext link
 */
import React, { useContext } from "react";
import { globale } from "../../App";
import HelpModal from "../Modals/HelpModal";
import { useState } from "react";

const Header = () =>{
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
export default Header;