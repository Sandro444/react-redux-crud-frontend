import { useEffect, useState } from "react"
import { useStore } from "react-redux"

export const useNotification = (duration) => {
    const [text, setText] = useState("")
    const [type, setType] = useState("")

    const setStatus = (notfText, notfType) => {
        setText(notfText)
        setType(notfType)
    }

    useEffect(() => {
        setTimeout(() => setText(""), duration * 1000)
    } ,[text])

    return {
        text, setStatus, type
    }
}