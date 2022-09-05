import React,{useContext} from "react";
import { globale } from "../../App";
import arrow from "../../assets/arrow_left.png";
import {userDatas} from "../../utils";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const Footer = () =>{
    let butnProps =[];
    const [page,setPage] = useContext(globale);
    const browse = useNavigate(); 
    const setPageMax = ()=>{
        page<3?setPage(page+1):setPage(page);
        let redir = "/page"+page;
        browse(redir);
    }

    return(
        <footer className="mt-[15px] mr-0 w-full flex flex-row justify-between items-baseline">
            <div className="w-1/3 ml-[12px] text-[16px] text-[#2696E8] flex flex-row items-baseline">
            <a href="#" onClick={
                ()=>{
                    setPage(1);
                    browse("../", { replace: true});
                }}>  
                <img style={{width:"16px",height:"8px"}} src={arrow}/>
            </a>
            <span className="montserrat">Back to Homepage</span>
            </div>
            <div>
                <button className="w-[154px] h-[48px] mx-[10px] bg-[#c5eceb] text-[#35a0ee] rounded montserrat" onClick={()=>setPageMax()}>Skip For Now</button>
                <Button width="154px" bkgcolor="#35a0ee" color="white" text="Next Step"/>
            </div>
        </footer>
    )
}
export default Footer;

