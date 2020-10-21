const formReducer = (state = [], action) => {
    switch(action.type){
        case "add user":
            return state.concat(action.payload)
        case "delete":
            return state.filter(user => user.email !== action.payload)
        case "update":
            return state.map(user => {
                if(user.email == action.payload.email){
                    user.name = action.payload.name
                    return user
                } return user
            })
        default:
            return state
    }
}

export default formReducer
 
export const addUser = (user) => {
    return {
        type: "add user",
        payload: user
    }
}

export const deleteSub = (email) => {
    return {
        type: "delete",
        payload: email
    }
}

export const updateSub = (email, name) => {
    return {
        type: "update",
        payload: {email, name}
    }
}