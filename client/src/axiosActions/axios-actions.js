import axios from "axios";
import {BASE_URL} from "../config/index";

export const getRoles = () => {
    return axios.get(`${BASE_URL}/users/roles`)
} 