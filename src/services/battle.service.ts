import axios from "axios";
import authHeader from "./auth-header";

const api = "http://localhost:8080/api/battle/";



export const createBattle = (name: string, eventId: number, nominationId: number, participants: string[]) => {
    return axios
        .post(api + "create", {
            name,
            eventId,
            nominationId,
            participants
        }, { headers: authHeader() })
        .then((response) => {
            if (response.status == 200) {
                return response.data
            }
            return response.data;
        })
        .catch((error) => {
            console.error("Ошибка запроса:", error.response?.data || error.message);
        });
};

export const getBattle = (id: number) => {
    return axios
        .get(api + id, { headers: authHeader() })
        .then((response) => {
            if (response.status == 200) {
                return response.data
            }

            return response.data;
        });
};

export const setBattleRoundWinner = (battleId: number, roundId: number, winnerId: number) => {
    return axios
        .post(api + battleId + "/round/" + roundId + "/set-winner", {
            winnerId
        }, { headers: authHeader() })
        .then((response) => {
            if (response.status == 200) {
                return response.data
            }

            return response.data;
        });
};