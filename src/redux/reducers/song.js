const initialState = {
    list: [],
    detail: {}
}

const songReducers = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LIST":
            const newList = action.payload
            return {
                ...state,
                list: newList
            }
        case "SET_DETAIL":
            const songDetail = action.payload
            return {
                ...state,
                detail: songDetail
            }

        default: return state
    }
}

export default songReducers