/**
 * this component renders the second form page of the webapp, composed by the Slider component
 * (it has some accessibility problems in order to be as much possible to the provided layout)
 * and the two RadioBtn components described into the theirselves file
 */
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { globale } from "../../App";
import RadioBtn from "../RadioBtn/RadioBtn";
import Slider from "../Slider/Slider";

const Form1 = ()=>{
    const [page,setPage] = useContext(globale);
    const [selected,setSelected] = useState(true);
    const [selected1,setSelected1] = useState(false);
    
    let browse = useNavigate();
    
    const submitting = event =>{
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
        <div className="montserrat_alt w-100">
            <p className="text-black text-[21px]">How much are you planning to invest in this year?</p>
            <form id="investment_form" onSubmit={submitting}>
                <Slider/>
                <div className="w-[370px]">
                    <p className="mt-[25px] text-black text-[21px]">Are you an accredited Investor?</p>
                    <p className="w-[300px] mt-[20px] flex flex-row justify-between">
                        <RadioBtn id="yes" checked={selected} value="accredited investor" funct={(e)=>{onChange(e)}} />
                        <RadioBtn id="no" checked={selected1} value="accredited investor" funct={(e)=>{onChange(e)}}/>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Form1;