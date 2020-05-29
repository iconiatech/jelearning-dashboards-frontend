import { UserState, UserActionTypes } from "./user.types";

const initialState: UserState = {
    isAuthenticated: false,
}

const userReducer = (state: UserState = initialState, action: UserActionTypes): UserState => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return {
                ...state,
                isAuthenticated: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;
