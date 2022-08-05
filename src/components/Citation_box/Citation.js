import { useContext } from "react";
import '../Citation_box/Citation.css';
import UP from '../../assets/UP.png';
import {pageInfo } from "../../utils";
import { globale } from "../../App";

const Citation = () =>{
    const [page,setPage] = useContext(globale);
    return(
        <>
            <div style={{width:"23vw",height:"33vh"}} className="flex flex-col justify-center px-[20px] pt-[10px] items-start bg-white montserrat text-[#A4AEB4] text-md rounded">
            <p>{pageInfo[page].cit}</p>
            <div className="mt-[10px] text-left w-full">
                <p className="text-black font-semibold montserrat_alt">{pageInfo[page].name}</p>
                <p className="text-sm">{pageInfo[page].role}</p>
                <p className="flex w-full justify-end"><img alt="up logo" src={UP}/></p>
            </div>
            </div>               
            <div className="citate bg-white rounded shadow-black z-10 border border-[#35A0EE]" style={{width:"56px",height:"56px"}}></div>
        </>
    )
}
export default Citation;