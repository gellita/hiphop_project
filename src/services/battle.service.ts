import axios from "axios";
import authHeader from "./auth-header";

const api = "http://localhost:8080/api/battle/";


export const createBattle = (eventId: bigint, nominationId: bigint, participantsEmails: object) => {
    return axios
        .post(api + "create", {
            name: "8x8",
            eventId,
            nominationId,
            participantsEmails
        }, { headers: authHeader() })
        .then((response) => {
            if (response.status == 200) {
                return response.data
            }

            return response.data;
        });
};

export const getBattle = (id: bigint) => {
    return axios
        .get(api + id, { headers: authHeader() })
        .then((response) => {
            if (response.status == 200) {
                return response.data
            }

            return response.data;
        });
};

export const setBattleRoundWinner = (battleId: bigint, roundId: bigint, winnerId: bigint) => {
    return axios
        .post(api + battleId + "/round" + roundId + "/set-winner", {
            winnerId
        }, { headers: authHeader() })
        .then((response) => {
            if (response.status == 200) {
                return response.data
            }

            return response.data;
        });
};