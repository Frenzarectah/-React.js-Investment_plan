/**
 * it renders the bottom part of the webapp, which includes the submit button (it changes his submit refer
 * according to the global "page" state)
 */

import React,{useContext} from "react";
import { globale } from "../../App";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import arrow from "../../assets/arrow_left.png";

const Footer = () =>{
    const [page,setPage] = useContext(globale);
    const browse = useNavigate(); 
    const setPageMax = ()=>{                    //this is a wrapper funct used to limit the setter page not-over 3.
        page<3?setPage(page+1):setPage(page);   //and to change the router of url by using useNavigate API
        let redir = "/page"+page;
        browse(redir);
    }

    return(
        <footer className="mt-1.5 mr-0 w-full flex flex-row justify-between items-baseline">
            <div className="w-1/3 ml-[12px] text-[16px] text-[#2696E8] flex flex-row items-baseline">
            <span onClick={
                ()=>{
                    setPage(1);
                    browse("../", { replace: true});
                }}>  
                <img alt="arrow" className="w-[16px] h-[8px]" src={arrow}/>
            </span>
            <span className="montserrat">Back to Homepage</span>
            </div>
            <div>
                <button className="w-[154px] h-[48px] mx-[10px] bg-[#c5eceb] text-[#35a0ee] rounded montserrat" onClick={()=>setPageMax()}>Skip For Now</button>
                <Button width="154px" bkgcolor="#35a0ee" color="white" text={page==3?"Finish":"Next Step"}/>
            </div>
        </footer>
    )
}
export default Footer;

