import { combineReducers } from "redux";
import dataReducer from '../redux/data/reducer'


export default combineReducers({

    data: dataReducer,
});