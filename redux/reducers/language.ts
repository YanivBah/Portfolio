import { AnyAction } from "redux";
import { LanguageLocale } from "../../config/constants";
import * as actionTypes from "../actions/actionTypes";

const language = (
  state = LanguageLocale.English,
  action: AnyAction
): LanguageLocale => {
  switch (action.type) {
    case actionTypes.SET_LANGUAGE:
      return action.payload;

    default:
      return state;
  }
};

export default language;
