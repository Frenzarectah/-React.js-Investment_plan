/**
 * it renders the modal which contains the summary of all the user informations, taken from the localStorage form and 
 * renderized by creating a "list" container.
 * The render depends by the visibility props, which is a boolean one.
 */
import React from "react";

const ResumeModal = (props) =>{
    //const keysContainer = Object.keys(localStorage);  //this is the most scalability way, but I choose the arrow down here
                                                        //because I needed to order the information in my way.
    
    const keysContainer = ["name","number","mail","country","accredited investor","min","max","Single Family","Residential Multifamily",
                            "Commercial Retail","Commercial Industrial","Commercial Hospitality","Commercial Warehousing","Commercial Office","Other"];
    const list = keysContainer.map((item, index) =>{
                    return(
                        <div className="text-xs">{keysContainer[index]}:<b> {localStorage[item]}</b></div>
                    )
                }
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
