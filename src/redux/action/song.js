export const setSongs = (list) => {
    return {
        type: "SET_SONGS",
        payload: list
    }
}

export const setDetailSong = (detail) => {
    return {
        type: "SET_DETAIL",
        payload: detail
    }
}