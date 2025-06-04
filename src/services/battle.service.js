import axios from "axios";
import authHeader from "./auth-header";
import { API_BASE_URL } from "../config.ts";
const api = `${API_BASE_URL}/api/battle/`;
export const createBattle = (name, eventId, nominationId, participants) => {
    return axios
        .post(api + "create", {
        name,
        eventId,
        nominationId,
        participants
    }, { headers: authHeader() })
        .then((response) => {
        if (response.status == 200) {
            return response.data;
        }
        return response.data;
    })
        .catch((error) => {
        console.error("Ошибка запроса:", error.response?.data || error.message);
    });
};
export const getBattle = (id) => {
    return axios
        .get(api + id, { headers: authHeader() })
        .then((response) => {
        if (response.status == 200) {
            return response.data;
        }
        return response.data;
    });
};
export const setBattleRoundWinner = (battleId, roundId, winnerId) => {
    return axios
        .post(api + battleId + "/round/" + roundId + "/set-winner", {
        winnerId
    }, { headers: authHeader() })
        .then((response) => {
        if (response.status == 200) {
            return response.data;
        }
        return response.data;
    });
};
