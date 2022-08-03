import React,{useContext} from "react";
import { globale, userDB } from "../../App";
import App from "../../App";
import arrow from "src/assets/arrow_left.png";

const Footer = () =>{
    const userDatas = useContext(userDB);
    const [page,setPage,pageInfo] = useContext(globale);
    //setting higher level setter functs to limit the "page" state
  
    const setPageMax = ()=> page<3?setPage(page+1):setPage(page);
    const setPageMin = ()=> page>1?setPage(page-1):setPage(page);
    //settin the funct to save data on a pseudo-db (an object)
    const nextStep1 = ()=>{
        Object.keys(userDatas).forEach((items)=>{
            userDatas[items] = document.forms["register_form"][items.toString()].value
            console.log(userDatas);
        });
        document.location.href="/page1";
        setPageMax()
    }    
    return(
        <footer className="mt-[15px] mr-0 w-full flex flex-row justify-between items-baseline">
            <div className="w-1/3 ml-[12px] text-[16px] text-[#2696E8] flex flex-row items-baseline">
            <a href="#" onClick={()=>setPageMin()}>  
                <img style={{width:"16px",height:"8px"}} src={arrow}/>
            </a>
            <span>Back to Homepage</span>
            </div>
            <div>
                <button className="w-[154px] h-[48px] mx-[10px] bg-[#c5eceb] text-[#35a0ee] rounded montserrat" onClick={()=>setPageMax()}>Skip For Now</button>
                <button type="submit" className="w-[154px] h-[48px] bg-[#35a0ee] text-white rounded montserrat" onClick={()=>nextStep1()}>Next Step</button>
            </div>
        </footer>
    )
}
export default Footer;