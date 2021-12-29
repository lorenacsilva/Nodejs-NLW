import { Response, Request } from 'express';
import {CreateTagService} from "../services/CreateTagService";


class CreateTagController{  
    async handle(request: Request, response: Response){
        const { name } = request.body; //desestruturação do que tem dentro patra pegar direto pelo nome do parâmetro
        
        const createTagService = new CreateTagService();
        const tag = await createTagService.execute(name);

        return response.json(tag)
    }

}

export { CreateTagController}