import axiosClient from "./axiosClient";

export const getAll = () => {
    return axiosClient.get('/all-songs')
}

export const getOne = (id) => {
    return axiosClient.get(`/all-songs/${id}`)
}

export const getByType = (type, params) => {
    return axiosClient.get(`/${type}?${params}`)
}

export const getBySearch = (value) => {
    return axiosClient.get(`/all-songs?q=${value}`)
}

export const getTop10 = () => {
    return axiosClient.get('/top10')
}