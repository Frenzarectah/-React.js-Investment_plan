import React,{useContext} from "react";
import { globale } from "../../App";
import arrow from "../../assets/arrow_left.png";
import {userDatas} from "../../utils";
import { useNavigate } from "react-router-dom";
const Footer = () =>{
    let browse = useNavigate();
    const [page,setPage] = useContext(globale);
    //setting higher level setter functs to limit the "page" state
  
    const setPageMax = ()=> page<3?setPage(page+1):setPage(page);
    const setPageMin = ()=> page>1?setPage(page-1):setPage(page);
    
    //settin the funct to save data on a pseudo-db (an object)
    const nextStep = ()=>{
        let fields = document.getElementById("form");
        let nfields = fields.getElementsByTagName("input").length;
        for(let i=0;i<=nfields-1;i++){
            userDatas[i] = fields.getElementsByTagName("input")[i].value
        }
        console.log(userDatas);
        const redir = "../page"+page;
        browse(redir, { replace: true});
        setPageMax();
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
                <button type="submit" form="form" className="w-[154px] h-[48px] bg-[#35a0ee] text-white rounded montserrat" /*</div>onClick={()=>nextStep()}*/>Next Step</button>
            </div>
        </footer>
    )
}
export default Footer;

        /*Object.keys(userDatas).forEach((items)=>{
            userDatas[items] = document.forms["register_form"][items.toString()].value
            console.log(userDatas);
        });*/