export const SET_CURRENT_USER = "SET_CURRENT_USER";

export interface UserState {
    isAuthenticated: boolean;
}

export interface SetCurrentUserAction {
    type: typeof SET_CURRENT_USER;
    payload: boolean;
}

export type UserActionTypes = SetCurrentUserAction;
