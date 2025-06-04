import axios from "axios";
import {API_BASE_URL} from "../config.ts";

const api = `${API_BASE_URL}/api/auth/`;


export const login = (username: string, password: string) => {
    return axios
        .post(api + "signin", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};
export const signup = (username: string, email: string, role: object, password: string) => {
    console.log("SIGNUP")
    return axios
        .post(api + "signup", {
            username,
            email,
            role,
            password,
        })
        .then((response) => {
            console.log(response.status)
            if(response.status == 200){
                login(username, password).then(r => {return r.data})
            }
            return response.data;
        });
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
};



