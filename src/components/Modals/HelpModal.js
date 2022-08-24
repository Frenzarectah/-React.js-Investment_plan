import React from "react";
import './modals.css';

const HelpModal = (props) =>{
    if(props.visibility){
        return(
            <div id="modal">
                <div class="header">NEED SOME HELP?</div>
                <div class="content">Contact our Helpdesk at 555-456700</div>
            </div>
        )
        }
}
export default HelpModal;