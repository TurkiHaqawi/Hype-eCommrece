import axios from 'axios'

const BASE_URL = "/api/"
const TOKEN = "fsddf"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})