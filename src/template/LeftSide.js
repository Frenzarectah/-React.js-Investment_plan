/**
 * this is the component that renders the left side of the webapp with
 * the two subcomponents ProgressSet (for the progress list bar) and
 * QuoteBox for the box containing the quotes
 */
import React from "react";
import ProgressSet from "../components/Progress/ProgressSet";
import QuoteBox from "../components/QuoteBox/QuoteBox";
import logo1 from '../assets/UNITED.png';
import logo2 from '../assets/PROPERTIES.png';

const LeftSide = () =>{
    return(
        <div className="w-1/3 h-full bg-[#35A0EE] p-[20px]">
        <div className="flex flex-row"><img alt="logo" src={logo1}/><img alt="logo" src={logo2}/></div>
        <div className="mt-20"> 
         <ProgressSet/>
        </div>
        <div className="mt-20">
         <QuoteBox/>   
        </div>
        </div>
    )
}
export default LeftSide;