import React from "react";
const ResumeModal = (props) =>{
    if (props.visibility){
        const accredited = (props.storage["accredited investor"])?"yes":"no";        
        const list = ()=>{ 
                for(let i=0; i<props.storage.length; i++) {
                let key = localStorage.key(i);
                return(
                    <p>{key}:{localStorage.getItem(key)}</p>
                );
          }
        }
        
        /*const list = Object.keys(props.storage).map((item)=>{
                      return(
                      <div><b>{localStorage.key(item+1)}</b>{props.storage[item]}</div>
            );
         });
         /*return Object.keys(ObjectTest).map(obj, i) => {
            return (
                <div>
                    id is: {ObjectTest[obj].id} ;
                    name is: {ObjectTest[obj].name}
                </div>
            )*/
        return(
            <div id="modal">
                <div className="header">REVIEW YOUR DETAILS! <span onClick={()=>document.location.reload()}>X</span></div>
                    <div className="content">
                        <p>Your Datas are the seguent:</p>
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