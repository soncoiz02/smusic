export const setListSong = (list) => {
    return {
        type: "SET_LIST",
        payload: list
    }
}

export const setDetailSong = (detail) => {
    return {
        type: "SET_DETAIL",
        payload: detail
    }
}