import axios from "axios";

export const API = axios.create({
    baseURL: "http://localhost:5121/api",
    headers: {
        "Content-Type": "application/json",
    },
})