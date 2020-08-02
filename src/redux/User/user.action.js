import { userTypeAction } from './user.types';

export const setCurrentUser = (user) => {
    return {
        type: userTypeAction.SET_CURRENT_USER,
        payload: user
    }
}