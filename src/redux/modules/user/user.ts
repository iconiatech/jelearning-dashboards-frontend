export function typedAction<T extends string>(type: T): { type: T };
export function typedAction<T extends string, P extends any>(type: T, payload: P): { type: T; payload: P };
export function typedAction(type: string, payload?: any) {
    return { type, payload };
}

export interface UserState {
    isAuthenticated: boolean;
    email: string;
    password: string;
    type: string;
}

const initialState: UserState = {
    isAuthenticated: false,
    email: "",
    password: "",
    type: "",
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
                ...action.payload
            }
        case "user/LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                email: "",
                password: "",
                type: ""
            };
        default:
            return state;
    }
};
