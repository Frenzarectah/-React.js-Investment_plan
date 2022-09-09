import React from "react";

const ResumeModal = (props) =>{
    if (props.visibility){
        return(
                <div id="modal">
                    <div className="header">REVIEW YOUR DETAILS! <span onClick={()=>document.location.reload()}>X</span></div>
                    <div className="content">
                        <p>Your Datas are the seguent:</p>
                        <p>Name: <b>{props.storage["name"]}</b></p>
                        <p>Number:<b>{props.storage["number"]}</b></p>
                        <p>Email:<b>{props.storage["mail"]}</b></p>
                        <p>Country:<b>{props.storage["country"]}</b></p>
                        <p>Accredited Investor:<b>{(props.storage["mail"])}</b></p>
                    </div>
                </div>
        )
    }
}
export default ResumeModal;