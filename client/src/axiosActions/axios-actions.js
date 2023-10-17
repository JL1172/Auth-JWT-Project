import axios from "axios";
import {BASE_URL} from "../config/index";

export const getRoles = () => {
    return axios.get(`${BASE_URL}/users/roles`)
} 

export const loginUser = (credentials) => {
    return axios.post(`${BASE_URL}/auth/login`,credentials)
}

export const registerUser = (credentials) => {
    return axios.post(`${BASE_URL}/auth/register`,credentials)
}

export const accessUserList = (creds) => {
    return axios.create({headers : {Authorization : JSON.parse(window.localStorage.getItem("token"))}})
    .post(`${BASE_URL}/users/user`,creds)
}