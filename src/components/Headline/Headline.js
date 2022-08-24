import React, { useContext } from "react";
import { globale } from "../../App";
import HelpModal from "../Modals/HelpModal";

//component which renders the headline above the app, on the right side

const Headline = () =>{
    const [page,setPage] = useContext(globale);
    const [open,setOpen] = setState(false);
    return(
        <div className='flex flex-row justify-between w-full'>
            <div className='text-[#A4AEB4]'>STEP {page} OF 3</div>
            <div>Lost or have trouble? <a href="#" className='text-[#2696E8] hover:underline'>Get Help!</a></div>
            <HelpModal/>
        </div>
    )
}
export default Headline;