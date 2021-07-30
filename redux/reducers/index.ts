import { combineReducers } from "redux";
import language from "./language";

const rootReducer = combineReducers({
  language: language,
});

export default rootReducer;
