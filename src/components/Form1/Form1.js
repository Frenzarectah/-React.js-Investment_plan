import React from "react";
import { userDatas } from "../../utils";


const Form1 = ()=>{
    return(
        <div className="montserrat_alt w-100 mt-[50px]">
            <p className="text-black text-[21px]">How much are you planning to invest in this year?</p>
            <form name="register_form">
                {userDatas["mail"]}
            </form>
        </div>
    )
}

export default Form1;