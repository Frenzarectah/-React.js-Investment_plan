import React, { useState } from "react";
import RadioBtn from "../RadioBtn/RadioBtn";
import Slider from "../Slider/Slider";

const Form1 = ()=>{
    const [selected,setSelected] = useState(true);
    const [selected1,setSelected1] = useState(false);
    const submittino = event =>{
        event.preventDefault();
    }
    return(
        <div className="montserrat_alt w-100 mt-[50px]">
            <p className="text-black text-[21px]">How much are you planning to invest in this year?</p>
            <form id="investment_form" onSubmit={submittino}>
                <Slider/>
                <div className="w-[370px]">
                    <p className="mt-[45px] text-black text-[21px]">Are you an accredited Investor?</p>
                    <p className="w-[300px] mt-[20px] flex flex-row justify-between">
                        <RadioBtn id="yes" checked={selected} funct={()=>{setSelected(!selected);setSelected1(!selected1)}} />
                        <RadioBtn id="no" checked={selected1} funct={()=>{setSelected1(!selected1);setSelected(!selected);}}/>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Form1;