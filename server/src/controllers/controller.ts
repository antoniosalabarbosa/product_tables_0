import product from "../models/schema/product";
import IUserRequest from "../typescript/interfaces/IUserRequest";

const findOne = async (id: string)=>{
    return await product.findById(id);
};

const findAll = async ()=>{
    return await product.find();
};

const insertOne = async (data: IUserRequest)=>{
    return await product.insertMany(data);
};

const updateOne = async (id: string, name: string, price: string)=>{
    return await product.updateOne({ _id: id }, {
        $set: {
            name: name,
            price: price
        }
    })
};

const deleteOne = async (id: string)=>{
    return await product.deleteOne(({ _id: id }));
};

export {
    findOne,
    findAll,
    insertOne,
    updateOne,
    deleteOne
};