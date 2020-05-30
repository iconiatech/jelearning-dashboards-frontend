import { combineReducers } from "redux";

import { userReducer } from "./modules/user/user";

const rootReducer = combineReducers({
    user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
