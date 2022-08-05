import React, { useContext } from "react";
import Progress from "./Progress";
import LastProgress from "./LastProgress";
import {pageInfo} from "../../utils";
import { globale } from "../../App";

//this component is an aggregator of Progress/Last Progress compts which 
//render the appropriate Component according to the number of pageInfo entries

const ProgressSet = ()=>{
    const [page,setPage] = useContext(globale);
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