import { Router } from "express";
import { connection } from "./models/connection";
import { user_requests } from "./views/user_requests";

const routes = Router();

routes.use(async (_req, _res, next)=>{
    await connection();
    next();
});

routes.use(user_requests);

export default routes;