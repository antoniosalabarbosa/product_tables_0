import axios from "axios";
import { RoutesTypes } from "../typescript/types/api_config";
import IUserRequest from "../typescript/interfaces/IUserRequest";

export const baseURL = "http://localhost:3001";
const headers = {"Content-Type": "application/json"};

const getProducts = async (route: RoutesTypes): Promise<IUserRequest[]> =>{
    return await axios.get(baseURL + route, { headers })
    .then(res => res.data)
    .catch((err)=> console.log(err));
};

const putProduct = async (route: RoutesTypes, _id: string, data: IUserRequest)=>{
    await axios.put(baseURL + route + _id, { 
        name: data.name,
        price: data.price
    })
    .then(()=> console.log("Objeto updated"))
    .catch(()=> new Error("Put function isn't working"));;
};

const deleteProduct = async (route: RoutesTypes, _id: string)=>{
    await axios.delete(baseURL + route + _id, { headers })
    .then(()=> console.log("Objeto deleted"))
    .catch(()=> new Error("Delete function isn't working"));
};

export {
    getProducts,
    putProduct,
    deleteProduct
};