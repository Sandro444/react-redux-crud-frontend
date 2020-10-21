import React from "react"

export const Input = (props) => {
    let inputProps = {...props}
    delete inputProps.label
    delete inputProps.reset
    return(
        <label> {props.label} <br/>
            <input {...inputProps} /> <br/>
        </label>
    )
}



