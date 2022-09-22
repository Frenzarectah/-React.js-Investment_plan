/**
 * this is the component which renders the quote box, the datas about the quotes are contains 
 * into the pageInfo file used to storage them externally for a more readable code.
 * Also, this compts imports "globale" context to read the page number of the app.
 * (because at every page is assigned a different quote)

*/

import { useContext } from "react";
import {pageInfo } from "../../utils";
import { globale } from "../../App";
import './QuoteBox.css';
import UP from '../../assets/UP.png';

const QuoteBox = () =>{
    const [page] = useContext(globale); 
    return(
        <>
            <div className="w-[80%] h-[10%] flex flex-col justify-center px-[20px] pt-[10px] items-start bg-white montserrat text-[#A4AEB4] text-md rounded">
            <p className="text-sm">{pageInfo[page].cit}</p>
            <div className="mt-[10px] text-left w-full">
                <p className="text-black font-semibold montserrat_alt text-sm">{pageInfo[page].name}</p>
                <p className="text-sm">{pageInfo[page].role}</p>
                <p className="flex w-full justify-end"><img alt="up logo" src={UP}/></p>
            </div>
            </div>               
            <div className="citate w-[45px] h-[45px] bg-white rounded shadow-black z-10 border border-[#35A0EE]"></div>
        </>
    )
}
export default QuoteBox;