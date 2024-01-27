import axios from "axios";
import { RoutesTypes } from "../typescript/types/api_config";
import UserRequest from "../typescript/interfaces/UserRequest";

export const baseURL = "http://localhost:3001/";

const getApi = async (route: RoutesTypes): Promise<UserRequest[]> =>{
    return await axios.get(baseURL + route, {
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.data)
    .catch((err)=> console.log(err));
};

export {
    getApi
};