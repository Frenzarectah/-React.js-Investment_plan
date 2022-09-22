import React from "react";
import Header from "../components/Header/Header";
import Page from './Page';

const RightSide = () =>{
    return(
        <div className="w-2/3 h-full flex flex-col mt-[10px] mx-[50px]">
            <Header/>
            <Page/>
        </div>
    )
}
export default RightSide;