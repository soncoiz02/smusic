import axiosClient from "./axiosClient";

export const getAll = () => {
    return axiosClient.get('/all-songs')
}

export const getOne = (id) => {
    return axiosClient.get(`/all-songs/${id}`)
}

export const getByType = (type, params) => {
    return axiosClient.get(`/all-songs?type=${type}&${params}`)
}

export const getByName = (name) => {
    return axiosClient.get(`/all-songs?name_like=${name}`)
}

export const getBySinger = (singer) => {
    return axiosClient.get(`/all-songs?singer_like=${singer}`)
}

export const getTop10 = () => {
    return axiosClient.get('/top10')
}