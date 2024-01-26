import product from "../models/schema/product";
import UserRequest from "../typescript/interfaces/UserRequest";

const findAll = async ()=>{
    return await product.find();
};

const insertMany = async (data: UserRequest)=>{
    return await product.insertMany(data);
};

export {
    findAll,
    insertMany
};