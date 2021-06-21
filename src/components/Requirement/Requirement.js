import React, {useEffect, useState} from 'react'
import WarningIcon from '@material-ui/icons/Warning';
import CheckIcon from '@material-ui/icons/Check';

export const Requirement = ({value,requirement})=>{
    const [isValid, setisValid] = useState();
    let iconStyles = {
        fontSize: '5px'
      };
    useEffect(()=>{
        setisValid(requirement.validator(value));
    },[value,requirement])

    return (
        <div className = 'requirement'>
            {isValid? <CheckIcon style={iconStyles}/>:<WarningIcon style={iconStyles}/>}

            <p className={isValid ? 'valid' : 'invalid'}>
        {requirement.text}
            </p>
        </div>
    )
}