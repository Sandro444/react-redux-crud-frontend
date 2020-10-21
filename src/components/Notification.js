import React from "react" 

export const Notification = ({text, type}) => {
    const bgColor = () => {
        switch(type){
            case "success":
                return "lightgreen"
            case "failure":
                return "lightred"
        }
    }
    const notStyle = {
        backgroundColor: bgColor(),
        display: !text || !type? "none" : "block",
        height: 40
    }
    return(
        <div className="notification" style={notStyle}>
            {text}
        </div>
    )
}