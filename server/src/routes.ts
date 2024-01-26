import { Router } from "express";
import { connection } from "./models/connection";
import { findAll } from "./controllers/controller";
import { user_requests } from "./views/user_requests";

const routes = Router();

routes.use(async (_req, _res, next)=>{
    await connection();
    next();
});

routes.get("/products", async (_req, res)=>{
    const response = await findAll();
    if(response){
        res.header("Content-Type, application/json");
        res.json(response);
    }
    else{
        res.json({ error: "Products isn't founded" })
    }
});

routes.use(user_requests);

export default routes;