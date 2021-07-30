import { combineReducers } from "redux";
import language from "./language";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  language: language,
});

export default rootReducer;
