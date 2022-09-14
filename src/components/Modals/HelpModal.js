/**
 * it basically renders the modal which contains some help to the user, the render depends on the visibiliy props,
 * which is a boolean one.
 */
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