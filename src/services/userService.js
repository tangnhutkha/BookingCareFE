import axios from "../axios"

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password })
}

const getAllUsers = (inputId) => {
    console.log('get all users: ', inputId)
    return axios.get(`/api/ms-user/all-users?id=${inputId}`)
}
const createNewUserService = (data) => {
    console.log('Data create new user service', data)
    return axios.post('api/ms-user/create', data)
}
const deleteUserService = (userId) => {
    return axios.delete('/api/ms-user/delete', {
        data: {
            id: userId
        }
    })
}
const editUserService = (user) => {
    return axios.put('/api/ms-user/edit', user)
}
const getAllCodeService = (inputType) => {
    return axios.get(`/api/ms-code/allcode?type=${inputType}`)
}

const getTopDoctorHomeService = (limit) => {
    return axios.get(`/api/ms-doctor/top-doctor-home?limit=${limit}`)
}

const getAllDoctors = () => {
    return axios.get(`/api/ms-doctor/get-all-doctor`)
}

const saveDetailDoctorService = (data) => {
    return axios.post(`/api/ms-doctor/save-info-doctor`, data)
}

export {
    handleLoginApi, getAllUsers, createNewUserService,
    deleteUserService, editUserService, getAllCodeService,
    getTopDoctorHomeService, getAllDoctors, saveDetailDoctorService
}