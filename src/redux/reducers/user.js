const initialState = {
    infor: {},
    listLiked: []
}

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case "SET_INFOR":
            const userInfor = action.payload
            return {
                ...state,
                infor: userInfor
            }
        default: return state
    }
}

export default userReducers