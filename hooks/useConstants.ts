import { useSelector } from "react-redux";
import CONSTANTS from "../config/constants";
import { RootState } from "../redux/reducers";

export default function useConstants() {
  const language = useSelector((state: RootState) => state.language);
  return CONSTANTS(language);
}
