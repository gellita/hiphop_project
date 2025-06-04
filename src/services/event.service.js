import axios from "axios";
import authHeader from "./auth-header";
import { format } from "date-fns";
import { API_BASE_URL } from "../config.ts";
const api = `${API_BASE_URL}/api/event/`;
const api_events = `${API_BASE_URL}/api/events`;
export const createEvent = (name, date, city, place) => {
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
            return response.data;
        }
        return response.data;
    });
};
export const getEventById = (id) => {
    return axios
        .get(api + id, { headers: authHeader() })
        .then((response) => {
        if (response.status == 200) {
            return response.data;
        }
        return response.data;
    });
};
export const getEventsByDateRange = (startDate, endDate) => {
    return axios
        .get(api_events, {
        headers: authHeader(),
        params: {
            startDate: format(startDate, "yyyy-MM-dd"),
            endDate: format(endDate, "yyyy-MM-dd")
        }
    })
        .then((response) => {
        if (response.status == 200) {
            console.log(response.data);
            return response.data;
        }
        return response.data;
    });
};
