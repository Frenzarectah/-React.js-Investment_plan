import { useContext } from "react";
import '../Citation_box/Citation.css';
import UP from '../../assets/UP.png';

const cit = {
    1:{cit:"We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete",name:"William Mac",title:"CO-FOUNDER, INVESTOR"},
    2:{cit:"Save from thousands to millions on your deal. Secure the best possible. And get independent, unbiased advice for free",name:"Jodie Sears",title:"UNITED PROPERTIES' AGENT"},
    3:{cit:"United Properties is about fast & easy searching, buying, selling and investing ever — online, with an expert by our side",name:"Ollie Mcmahon",title:"MANAGING DIRECTOR"}
}
const Citation = () =>{
    const [page,setPage] = useContext(global);
    return(
        <>
            <div style={{width:"22vw",height:"33vh"}} className="flex flex-col justify-center px-[20px] pt-[10px] items-start bg-white montserrat text-[#A4AEB4] text-md rounded">
            <p>{cit[page].cit}</p>
            <div className="mt-[10px] text-left w-full">
                <p className="text-black font-semibold montserrat_alt">{cit[page].name}</p>
                <p className="text-sm">{cit[page].title}</p>
                <p className="flex w-full justify-end"><img alt="up logo" src={UP}/></p>
            </div>
            </div>               
            <div className="citate bg-white rounded shadow-black z-10 border border-[#35A0EE]" style={{width:"56px",height:"56px"}}></div>
        </>
    )
}
export default Citation;