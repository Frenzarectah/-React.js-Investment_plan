import React from "react";

const ResumeModal = (props) =>{
    //const keysContainer = Object.keys(localStorage);
    const keysContainer = ["name","number","mail","country","accredited investor","min","max","Single Family","Residential Multifamily",
                            "Commercial Retail","Commercial Industrial","Commercial Hospitality","Commercial Warehousing","Commercial Office","Other"];
    const list = keysContainer.map((item, index) =>{
                    return(
                        <div className="text-xs">{keysContainer[index]}:<b> {localStorage[item]}</b></div>
                  )}
                )
    if (props.visibility){     
            return(
            <div id="modal" className="lg">
                <div className="header">REVIEW YOUR DETAILS! <span onClick={()=>window.location.reload()}>X</span></div>
                    <div className="content">
                        <p className="text-xs">Your Datas are the next:</p>           
                        {list}
                </div>
                
            </div>
        )
    }
}
export default ResumeModal;

            
/*<div id="modal">
                    <div className="header">REVIEW YOUR DETAILS! <span onClick={()=>document.location.reload()}>X</span></div>
                    <div className="content">
                        <p>Your Datas are the seguent:</p>
                        <p>Name: <b>{props.storage["name"]}</b></p>
                        <p>Number:<b>{props.storage["number"]}</b></p>
                        <p>Email:<b>{props.storage["mail"]}</b></p>
                        <p>Country:<b>{props.storage["country"]}</b></p>
                        <p>Accredited Investor:<b>{accredited}</b></p>
                        <p>Single Family:<b>{props.storage["Single Family"]?"yes":"N.D"}</b></p>
                        <p>Residence multifamily:<b>{props.storage["Residence multifamily"]?"yes":"N.D"}</b></p>
                        <p>Commercial Retail:<b>{props.storage["Commercial Retail"]?"yes":"N.D"}</b></p>
                        <p>Commercial industrial:<b>{props.storage["Commercial Industrial"]?"yes":"N.D"}</b></p>
                        <p>Commercial Retail:<b>{props.storage["Commercial Retail"]?"yes":"N.D"}</b></p>

                    </div>
</div>*/