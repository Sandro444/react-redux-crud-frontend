import React, { useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { useField } from "../hooks/useField"
import {deleteSub, updateSub} from "../reducers/formReducer"
export const SingleSub = ({ subscript }) => {
    const [mode, setMode] = useState("")
    const dispatch = useDispatch()

    const name = useField("text")

    const inputProps = {...name}
    delete inputProps.reset

    const handleDelete = () => {
        dispatch(deleteSub(subscript.email))
    }

    const handleUpdateMode = (e) => {
        mode?setMode(""):setMode("update")
        name.reset()
    }

    const handleUpdate = (e) => {
        dispatch(updateSub(subscript.email, name.value))
        name.reset()
    }

    return (
        <ul>
            <li> name: {subscript.name} </li> {mode=="update"? <> <input {...inputProps} /> <button onClick={handleUpdate}>submit</button> </>: ""}
            <li> email: {subscript.email} </li>
            <li> age: {subscript.age} </li>
            <button onClick={handleDelete}>delete</button>
            <button onClick= {handleUpdateMode}>update</button>
        </ul>
    )
}