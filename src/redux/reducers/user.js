const initialState = {
    infor: {},
    isLogin: false
}

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case "SET_INFOR":
            const userInfor = action.payload
            return {
                ...state,
                infor: userInfor
            }
        case "SET_LOGIN":
            return {
                ...state,
                isLogin: !state.isLogin
            }
        default: return state
    }
}

export default userReducers