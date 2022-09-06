import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { globale } from "../../App";
import '../Form/Form.css';
import arrow from "../../assets/arrow.png";
//import {userDatas} from '../../utils';
import PrivacyModal from "../Modals/PrivacyModal";

const Form = (props) =>{
    const [page,setPage] = useContext(globale);
    const [open,setOpen] = useState(false);
    const [content, setContent] = useState({});
    let browse = useNavigate();

    const recordData = (field,value) =>{
        setContent(values => ({...values, [field]: value}))
    }
    const submitting = event =>{
        event.preventDefault();
        for(let key in content){
            props.db[key] = content[key];
        }
        let redir = "../page"+page;
        browse(redir);
        setPage(page+1);
    }
        return(
            <form id="form" name="register_form" className="montserrat w-100 flex flex-col" onSubmit={submitting}>
                <div className="w-[540px] flex flex-row justify-between">
                    <label className="w-[270px] text-[14px] text-[#A4AEB4]">Full Name:</label>
                    <label className="w-[230px] text-[14px] text-[#A4AEB4]">Number:</label>
                </div>
                <div className="w-[540px] flex flex-row justify-between">
                    <input type="text" name="name" onChange={(e) => recordData(e.target.name,e.target.value)} className="w-[270px] text-[21px] text-black border-b-2 border-[#D5D9DC]" required/>
                    <input type="tel" name="number" onChange={(e) => recordData(e.target.name,e.target.value)} className="w-[230px] text-[21px] text-black border-b-2 border-[#D5D9DC]" required/>
                </div>
                <div className="w-[540px] flex flex-col">
                    <label className="text-[14px] text-[#A4AEB4]">Email Address:</label>
                    <input type="email" name="mail" onChange={(e) => recordData(e.target.name,e.target.value)} className="text-[21px] text-black border-b-2 border-[#D5D9DC]" required></input>
                </div>
                <div className="w-[540px] flex flex-col">
                    <label className="text-[14px] text-[#A4AEB4]">Country:</label>
                    <input type="text" name="country" onChange={(e) => recordData(e.target.name,e.target.value)} className="text-[21px] text-black border-b-2 border-[#D5D9DC]" required></input>
                </div>
                <div className="w-[540px] mt-[30px] flex flex-col">
                   <div className="text-[21px] extrabold text-black">Privacy Policy</div>
                   <div className="text-[16px] text-[#a4aeb4] my-[12px]">We know you care about how your personal information is used and shared, so we take your privacy seriously</div>
                   <div className="text-[16px] text-[#2696E8] flex flex-row items-baseline">
                    <span>Expand privacy policy</span>
                        <a href="#" onClick={()=>setOpen(!open)}>  
                            <img style={{width:"16px",height:"8px"}} src={arrow}/>
                        </a>
                    </div> 
                    <PrivacyModal visibility={open}/>
                </div>
            </form>
        )
}

export default Form;