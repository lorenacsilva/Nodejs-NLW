import {Router} from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

//Geralmente o nome do recurso nas API's é definido no plural
router.post("/users", createUserController.handle );
router.post("/tags", createTagController.handle); 

export { router };