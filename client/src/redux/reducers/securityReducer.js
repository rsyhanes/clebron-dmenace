const initialState = {
    loggedIn: false,
    user: null
};

export default function securityReducer(state = initialState, action) {
    switch (action.type) {
        case "USER_LOGIN":
            return { ...state, loggedIn: action.success, user: action.user !== null ? action.user.username : null  };    
        case "USER_LOGOUT":
            return { ...state, loggedIn: false, user: null };
        default:
            return state;
    }
}