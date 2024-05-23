// import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/types";
//
// interface State {
//     message?: string;
// }
//
// const initialState: State = {};
//
// export default function messageReducer(state: State = initialState, action: Action) {
//     const { type, payload } = action;
//
//     switch (type) {
//         case "SET_MESSAGE":
//             return { message: payload };
//
//         case "CLEAR_MESSAGE":
//             return { message: "" };
//
//         default:
//             return state;
//     }
// }