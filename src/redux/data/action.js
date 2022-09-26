
import {
    STORE_ALL_DATA
} from './actionType';


export const storeAllData = (data) => (dispatch) => {

    dispatch({
        type: STORE_ALL_DATA,
        payload: data
    });
};

