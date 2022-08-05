import React from "react";
import Headline from "../components/Headline/Headline";
import Page from './Page';

const RightSide = () =>{
    return(
        <div className="flex flex-col mt-[10px] mx-[50px]">
            <Headline/>
            <Page/>
        </div>
    )
}
export default RightSide;