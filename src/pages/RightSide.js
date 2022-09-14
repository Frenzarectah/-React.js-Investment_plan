import React from "react";
import Header from "../components/Headline/Header";
import Page from './Page';

const RightSide = () =>{
    return(
        <div className="flex flex-col mt-[10px] mx-[50px]">
            <Header/>
            <Page/>
        </div>
    )
}
export default RightSide;