import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";


export const getAdminBoard = () => {
    return axios.get(API_URL + "admin", { headers: authHeader() });
};