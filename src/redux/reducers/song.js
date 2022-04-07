const initialState = {
    songs: [],
    detail: {}
}

const songReducers = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SONGS":
            const listSongs = action.payload
            return {
                ...state,
                songs: listSongs
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