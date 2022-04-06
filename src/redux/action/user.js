export const setUserInfor = (infor) => {
    return {
        type: "SET_INFOR",
        payload: infor
    }
}

export const setIsLogin = (isLogin) => {
    return {
        type: "SET_LOGIN",
        payload: isLogin
    }
}