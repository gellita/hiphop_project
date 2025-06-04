import axios from "axios";
import authHeader from "./auth-header";
import {API_BASE_URL} from "../config.ts";

const API_URL = `${API_BASE_URL}/api/test/`;


export const getAdminBoard = () => {
    return axios.get(API_URL + "admin", { headers: authHeader() });
};