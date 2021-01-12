import axios from "axios"

export function api(token){

    const instance = axios.create({
        baseURL: 'http://cdn.umdsoft.uz/api/',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return instance;
}

export const baseUrl = 'http://cdn.umdsoft.uz/api/';