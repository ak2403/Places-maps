export const authCheck = (data) => {
    return {
        type: 'auth',
        payload: {
            data: data,
            auth: true
        }
    }
}