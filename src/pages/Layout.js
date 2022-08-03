import React from "react";
import LeftSide from "./LeftSide.js";
import RightSide from "./RightSide.js";

const Layout = ()=>{
    return(
        <div className="flex flex-row w-full h-full">
            <LeftSide/><RightSide/>
        </div>
    );
}

export default Layout;