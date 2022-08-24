import React from "react";

const PrivacyModal = (props)=>{
    if (props.visibility){
        return(
            <div id="modal">
                <div className="header">PRIVACY POLICY</div>
                <div className="content">
                    A privacy policy is a document contained on a website that explains how a website or organization will collect, store, protect, 
                    and utilize personal information provided by its users.</div>
            </div>
        )
    }
}

export default PrivacyModal;