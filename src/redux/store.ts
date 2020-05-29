import { createStore, applyMiddleware } from "redux";

import rootReducer from "./root-reducer";

// const middlewares = [];

export default createStore(rootReducer, applyMiddleware());
