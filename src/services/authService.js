import http from "../config/http"


export const loginUser = ({email, password}) => http.post('/login', {email, password })