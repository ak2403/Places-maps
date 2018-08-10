import { AsyncStorage } from 'react-native';

const authReducer = (state = { isAuth: false, isSigned: false, authUser: '', authErrorMsg: '' }, action) => {
    switch (action.type) {
        case 'isLogged':
            if (action.payload.type === 'SUCCESS') {
                AsyncStorage.setItem('username', action.payload.username);
                return {
                    ...state,
                    isAuth: true,
                    authUser: action.payload.username
                }
            } else {

            }
        case 'signUp':
            let { payload } = action;
            if (payload.type === 'SUCCESS') {
                return {
                    ...state,
                    isSigned: true
                }
            }
        case 'alreadyLogged':
            return {
                ...state,
                authUser: action.payload.username
            }
        case 'logout':
            return {
                ...state,
                isAuth: false,
                isSigned: false,
                authUser: ''
            }
        default:
            return state;
    }
}

export default authReducer;