/**this component is an aggregator of Progress/Last Progress compts which 
*  renders the appropriate Component according to the number of pageInfo entries
* the last entry will renders LastProgress, which is slightly different 
*/

import React from "react";
import Progress from "./Progress";
import LastProgress from "./LastProgress";
import {pageInfo} from "../../utils";


const ProgressSet = ()=>{

    return Object.keys(pageInfo).map(item=>{
        if(Object.keys(pageInfo).length != item){
            return(
                <Progress descr={pageInfo[item].title} num={item} />
            )}else{
            return(
                <LastProgress descr={pageInfo[item].title} num={item} />
            )
        }
    })
    
}
export default ProgressSet;