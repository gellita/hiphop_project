import axios from "axios";
import authHeader from "./auth-header";

const api = "http://localhost:8080/api/event/";

export const createEvent = (name: string, date: Date, city: string, place: string) => {
    return axios
        .post(api + "create", {
            name,
            date,
            city,
            place
        }, {
            headers: authHeader()
        })
        .then((response) => {
            if (response.status == 200) {
                return response.data
            }

            return response.data;
        });
};

export const getEventById = (id: bigint) => {
    return axios
        .get(api + id, { headers: authHeader() })
        .then((response) => {
            if (response.status == 200) {
                return response.data
            }

            return response.data;
        });
};
