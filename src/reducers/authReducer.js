const authReducer = (state = {isAuth: false, authUser: '', authErrorMsg: ''}, action) => {
    switch (action.type) {
        case 'auth':
            debugger
            if(action.payload.auth){
                return {
                    ...state,
                    isAuth: true,
                    authUser: action.payload.data.username
                }
            }else{

            } 
        default:
            return state;
    }
}

export default authReducer;