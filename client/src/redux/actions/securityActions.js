import {
    login
} from './../../api/users';

export const logIn = user => async dispatch => {
    const success = await login(user);
    if (success) {
        console.log('here');
        dispatch({ type: 'USER_LOGIN', user: user, success: true })
    } else {
        console.log('there');
        dispatch({ type: 'USER_LOGIN', user: null, success: false })
    }
}

export const logOut = user => dispatch => {
    console.log('logout action');
    dispatch({ type: 'USER_LOGOUT' })
}