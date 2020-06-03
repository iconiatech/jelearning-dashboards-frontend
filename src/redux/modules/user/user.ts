import { typedAction } from "../typed.action";
import { User } from "../../../models/user/user.model";

export interface UserState extends User {
    isAuthenticated: boolean;
}

const initialState: UserState = {
    id: 0,
    type: "",
    name: "",
    email: "",
    password: "",
    username: "",
    isDeactivated: false,
    isAuthenticated: false,
}

export const login = (user: UserState) => {
    console.log("I ran from here...")
    return typedAction("user/LOGIN", user);
};

export const logout = () => {
    return typedAction("user/LOGOUT");
};

type UserAction = ReturnType<typeof login | typeof logout>;

export const userReducer = (state=initialState, action: UserAction): UserState => {
    switch (action.type) {
        case "user/LOGIN":
            return {
                ...state,
                ...action.payload,
            }
        case "user/LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                email: "",
                password: "",
                type: "",
            };
        default:
            return state;
    }
};
