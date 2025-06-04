"use strict";
// import {
//     LOGIN_SUCCESS,
//     LOGIN_FAIL,
//     LOGOUT,
// } from "../actions/types";
//
// interface User {
//     username: string;
//     email: string;
// }
//
// interface AuthState {
//     isLoggedIn: boolean;
//     user: User | null;
// }
//
// const user = JSON.parse(localStorage.getItem("user"));
//
// const initialState: AuthState = user
//     ? { isLoggedIn: true, user }
//     : { isLoggedIn: false, user: null };
//
// type Action = { type: string; payload: { user: User } };
//
// export default function authReducer(state: AuthState = initialState, action: Action) {
//     const { type, payload } = action;
//
//     switch (type) {
//         case LOGIN_SUCCESS:
//             return {
//                 ...state,
//                 isLoggedIn: true,
//                 user: payload.user,
//             };
//         case LOGIN_FAIL:
//             return {
//                 ...state,
//                 isLoggedIn: false,
//                 user: null,
//             };
//         case LOGOUT:
//             return {
//                 ...state,
//                 isLoggedIn: false,
//                 user: null,
//             };
//         default:
//             return state;
//     }
// }
