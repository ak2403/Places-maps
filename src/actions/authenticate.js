import axios from 'axios';

export const signUp = (data) => {
    return (dispatch) => {
        axios.post('http://127.0.0.1:5000/registration', data, { headers: {  
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'}}).then(res => {
                dispatch({
                    type: 'signUp',
                    payload: res.data
                })
            })
    }
}

export const authCheck = (data) => {
    return (dispatch) => {
        axios.post('http://127.0.0.1:5000/authentication', data, { headers: {  
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'}}).then(res => {
                dispatch({
                    type: 'isLogged',
                    payload: res.data
                })
            })
    }
}

export const alreadyLogged = (data) => {
    return {
        type: 'alreadyLogged',
        payload: {
            username: data
        }
    }
}