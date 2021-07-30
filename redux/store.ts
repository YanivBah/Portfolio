import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";

// const middleware = [thunk]

const makeStore = () => createStore(rootReducer, composeWithDevTools());

export const wrapper = createWrapper(makeStore);
