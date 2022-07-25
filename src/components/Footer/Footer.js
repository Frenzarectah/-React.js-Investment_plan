import React,{useContext} from "react";
import { globale } from "../../App";
import App from "../../App";
import arrow from "./assets/arrow_left.png";
const Footer = () =>{
    const [page,setPage,pageInfo] = useContext(globale);
      //setting higher level setter functs to limit the "page" state
  const setPageMax = ()=> page<3?setPage(page+1):setPage(page);
  const setPageMin = ()=> page>1?setPage(page-1):setPage(page);
    return(
        <footer className="mt-[30px] mr-0 w-full flex flex-row justify-between items-baseline">
            <div className="w-1/3 text-[16px] text-[#2696E8] flex flex-row items-baseline">
            <a href="#" onClick={()=>setPageMin()}>  
                <img style={{width:"16px",height:"8px"}} src={arrow}/>
            </a>
            <span>Back to Homepage</span>
            </div>
            <div>
                <button className="w-[154px] h-[48px] mx-[10px] bg-[#c5eceb] text-[#35a0ee] rounded montserrat" onClick={()=>setPageMax()}>Skip For Now</button>
                <button className="w-[154px] h-[48px] bg-[#35a0ee] text-white rounded montserrat">Next Step</button>
            </div>
        </footer>
    )
}
export default Footer;