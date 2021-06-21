import {Requirement} from '../Requirement'
import React,{useCallback, useEffect} from 'react'

export const ReqDialog = (
    {   value,
        Requirements,
        onValidChange,
    })=>{
    const validChange = useCallback(onValidChange,[]);

    useEffect(()=>{

        validChange(
            Requirements.every(req =>req.validator(value))

        );
    },[value,Requirements,validChange])

    return Requirements.map((req,index)=>(
        <Requirement
        key = {index}
        value = {value}
        requirement = {req}
        onValidChange = {onValidChange}/>
    ))
}