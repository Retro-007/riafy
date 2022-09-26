/* eslint-disable import/no-anonymous-default-export */

import {
    STORE_ALL_DATA
} from "./actionType";


const initialState = {
    data: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case STORE_ALL_DATA:
            return { ...state, data: action.payload }

        default:
            return state;
    }
}