import { Router } from "express";
import { 
    findOne,
    findAll, 
    insertOne, 
    updateOne, 
    deleteOne 
} from "../controllers/controller";
import IUserRequest from "../typescript/interfaces/IUserRequest";

const user_requests = Router();

user_requests.get("/api/Products/getProducts/:id", async (req, res)=>{
    const { id } = req.params;
    const response = await findOne(id);
    if(response){
        res.header("Content-Type, application/json");
        res.json(response);
    }
    else{
        res.json({ error: "Products isn't founded" })
    }
});

user_requests.get("/api/Products/getProducts", async (_req, res)=>{
    const response = await findAll();
    if(response){
        res.header("Content-Type, application/json");
        res.json(response);
    }
    else{
        res.json({ error: "Products isn't founded" })
    }
});

// localhost:3001/product
user_requests.post("/api/Products/postProduct", async (req, res)=>{
    const { name, price }: IUserRequest = req.body;
    await insertOne({name, price});
    res.header('Content-Type', 'application/json');
    res.json("Ok");
});

user_requests.put("/api/Products/putProduct/:id", async (req, res)=>{
    const { id } = req.params;
    const { name, price }: IUserRequest = req.body;
    await updateOne(id, name, price);
    res.header('Content-Type', 'application/json');
    res.json("Ok");
});

user_requests.delete("/api/Products/deleteProduct/:id", async (req, res)=>{
    const { id } = req.params;
    await deleteOne(id);
    res.header('Content-Type', 'application/json');
    res.json("Ok");
});

export { user_requests };