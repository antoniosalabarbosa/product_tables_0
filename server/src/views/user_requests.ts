import { Router } from "express";
import { insertMany } from "../controllers/controller";
import UserRequest from "../typescript/interfaces/UserRequest";

const user_requests = Router();

// localhost:3001/product
user_requests.post("/product", async (req, res)=>{
    const { name, price }: UserRequest = req.body;
    await insertMany({name, price});
    res.header('Content-Type', 'application/json');
    res.json("Ok");
});

export { user_requests };