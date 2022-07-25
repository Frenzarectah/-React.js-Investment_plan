import { useContext } from "react";
import { globale } from "../../App";
import '../Form/Form.css';
import arrow from "./assets/arrow.png";

const Form = () =>{
    const [page,setPage] = useContext(globale);
    //function to open the privacy modal
    const openPrivacy = () => document.getElementById("privacy").style.display="block";  
        return(
            <form className="montserrat w-100 flex flex-col">
                <div className="flex flex-row justify-between">
                    <label for="name" className="w-[270px] text-[14px] text-[#A4AEB4]">Full Name:</label>
                    <label for="number" className="w-[230px] text-[14px] text-[#A4AEB4]">Number:</label>
                </div>
                <div className="flex flex-row justify-between">
                    <input type="text" id="name" className="w-[270px] text-[21px] text-black border-b-2 border-[#D5D9DC]" required></input>
                    <input type="tel" id="number" className="w-[230px] text-[21px] text-black border-b-2 border-[#D5D9DC]" required></input>
                </div>
                <div className="w-[540px] flex flex-col mx-auto">
                    <label for="mail" className="text-[14px] text-[#A4AEB4]">Email Address:</label>
                    <input type="email" id="mail" className="text-[21px] text-black border-b-2 border-[#D5D9DC]" required></input>
                </div>
                <div className="w-[540px] flex flex-col mx-auto">
                    <label for="country" className="text-[14px] text-[#A4AEB4]">Country:</label>
                    <input type="email" id="country" className="text-[21px] text-black border-b-2 border-[#D5D9DC]" required></input>
                </div>
                <div className="w-[540px] mt-[30px] flex flex-col mx-auto">
                   <div className="text-[21px] extrabold text-black">Privacy Policy</div>
                   <div className="text-[16px] text-[#a4aeb4] my-[12px]">We know you care about how your personal information is used and shared, so we take your privacy seriously</div>
                   <div className="text-[16px] text-[#2696E8] flex flex-row items-baseline">
                    <span>Expand privacy policy</span>
                        <a href="#" onClick={()=>openPrivacy()}>  
                            <img style={{width:"16px",height:"8px"}} src={arrow}/>
                        </a>
                    </div> 
                </div>
            </form>
        )
}


export default Form;