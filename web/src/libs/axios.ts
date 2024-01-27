import axios from "axios";
import { RoutesTypes } from "../typescript/types/api_config";
import IUserRequest from "../typescript/interfaces/IUserRequest";

export const baseURL = "http://localhost:3001/";

const getApi = async (route: RoutesTypes): Promise<IUserRequest[]> =>{
    return await axios.get(baseURL + route, {
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.data)
    .catch((err)=> console.log(err));
};

export {
    getApi
};