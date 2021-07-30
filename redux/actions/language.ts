import { LanguageLocale } from "../../config/constants";
import * as t from "./actionTypes";

export const setLanguage = (payload: LanguageLocale) => ({
  type: t.SET_LANGUAGE,
  payload: payload,
});
