import React from "react";
import pageInfo from "../utils";
import logo1 from '../assets/UNITED.png';
import logo2 from '../assets/PROPERTIES.png';
import ProgressSet from "../components/Progress/ProgressSet";
import Citation from "../components/Citation_box/Citation";


const LeftSide = () =>{
    return(
        <div className="w-[500px] h-full bg-[#35A0EE] p-[52px]">
        <div class="flex flex-row"><img src={logo1}/><img src={logo2}/></div>
        <div class="mt-[100px]"> 
         <ProgressSet/>
        </div>
        <div class="mt-[50px]">
         <Citation/>   
        </div>
        </div>
    )
}
export default LeftSide;