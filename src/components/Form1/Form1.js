import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { globale } from "../../App";
import RadioBtn from "../RadioBtn/RadioBtn";
import Slider from "../Slider/Slider";

const Form1 = ()=>{
    const [page,setPage] = useContext(globale);
    const [selected,setSelected] = useState(true);
    const [selected1,setSelected1] = useState(false);
    const browse = useNavigate();
    
    const submittino = event =>{
        event.preventDefault();
        let redir = "../page"+page;
        browse(redir);
        setPage(page+1);
    }
    const onChange = (event) =>{
        setSelected(!selected);
        setSelected1(!selected1);
        localStorage.setItem(event.target.value,selected);
        localStorage.setItem(event.target.value,selected1);
    }
    return(
        <div className="montserrat_alt w-100 mt-[50px]">
            <p className="text-black text-[21px]">How much are you planning to invest in this year?</p>
            <form id="investment_form" onSubmit={submittino}>
                <Slider/>
                <div className="w-[370px]">
                    <p className="mt-[45px] text-black text-[21px]">Are you an accredited Investor?</p>
                    <p className="w-[300px] mt-[20px] flex flex-row justify-between">
                        <RadioBtn id="yes" checked={selected} value="accredited investor" funct={(e)=>{onChange(e)}} />
                        <RadioBtn id="no" checked={selected1} value="non accredited investor" funct={(e)=>{onChange(e)}}/>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Form1;