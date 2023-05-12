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
    return axios.get(`/api/ms-user/allcode?type=${inputType}`)
}
export { handleLoginApi, getAllUsers, createNewUserService, deleteUserService, editUserService, getAllCodeService }