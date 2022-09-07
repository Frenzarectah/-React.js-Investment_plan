import React, { useState } from "react";
import Slider from "../Slider/Slider";

const Form1 = ()=>{
    const submittino = event =>{
        event.preventDefault();
    }
    return(
        <div className="montserrat_alt w-100 mt-[50px]">
            <p className="text-black text-[21px]">How much are you planning to invest in this year?</p>
            <form id="investment_form" onSubmit={submittino}>
                <Slider/>
                <p className="mt-[45px] text-black text-[21px]">Are you an accredited Investor?</p>
                
            </form>
        </div>
    )
}

export default Form1;