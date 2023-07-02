import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTExNDAwZTUzMzY3N2QxMmUzMDJjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODMxNDY2NSwiZXhwIjoxNjg4NTczODY1fQ.UTBkSYWssDuy2-HFnONLiZRdYfjVEv0vNSg4hyDyL_A";

export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseurl: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});