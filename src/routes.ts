import {Router} from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

//Geralmente o nome do recurso nas API's é definido no plural
router.post("/tags", ensureAdmin, createTagController.handle); 
//router.use(ensureAdmin); // todas as rotas que estiverem abaixo terao que utilizar obrigatoriamente middleware
router.post("/users", createUserController.handle );


export { router };