import { model, Schema } from "mongoose";

const product = model("products", new Schema({
    name: String,
    price: String,
}));

export default product;